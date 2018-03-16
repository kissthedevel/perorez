<?php
	require_once('../parameters.php');
	require_once('../functions.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
	
	$administrator = 0;
	if (isset($_GET['creator'])) {
		$functions = new penknifeFunctions;
		$administrator = $functions->isAdministrator($_GET['creator']);
	}
	
	// Create connection
	$conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
	// Check connection
	if ($conn->connect_error) {
// 		die("Connection failed: " . $conn->connect_error);
		$response->success = false;
		$response->message = "Error: " . $conn->connect_error;
	} 
	
	if ( isset($_GET['creator']) || isset($_GET['id']) ) {
		if ( isset($_GET['creator']) ) {
			
			$offset = isset($_GET['offset']) ? $_GET['offset'] : 0;
			
			if ($administrator) {
				$stmt = $conn->prepare("
					SELECT a.id, a.approved, a.nomeprogetto
					FROM project a
					ORDER BY a.approved ASC
					LIMIT 1000 OFFSET ?
				");
				$stmt->bind_param("i", $offset);
			} else {
				$stmt = $conn->prepare("
					SELECT a.id, a.approved, a.nomeprogetto
					FROM project a
					WHERE a.creator = ?
					ORDER BY a.approved ASC
					LIMIT 1000 OFFSET ?
				");
				$stmt->bind_param("ii", $_GET['creator'], $offset);
			}
			
		}
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt, $colId, $colApproved, $colNomeProgetto);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['approved'] = $colApproved;
				$response->data[$countRecord]['nomeprogetto'] = $colNomeProgetto;
				$countRecord++;
			}
		} else {
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		
        $stmt->close();
	}

	$conn->close();
	echo json_encode($response);
?>