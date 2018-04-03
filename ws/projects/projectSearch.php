<?php
	require_once('../parameters.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
	
	// Create connection
	$conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
	// Check connection
	if ($conn->connect_error) {
// 		die("Connection failed: " . $conn->connect_error);
		$response->success = false;
		$response->message = "Error: " . $conn->connect_error;
	} 

	$offset = isset($_GET['offset']) ? $_GET['offset'] : 0;
	
	$stmt = $conn->prepare("
		SELECT a.id, a.approved, a.nomeprogetto, a.image_1, a.settore
		FROM project a
		WHERE a.approved = 1
		ORDER BY a.nomeprogetto ASC
		LIMIT 1000 OFFSET ?
	");
	$stmt->bind_param("i", $offset);
	
	if ($stmt->execute()) {
		$response->success = true;
		$response->message = 'Ricerca eseguita con successo!';
		
		/* bind variables to prepared statement */
		mysqli_stmt_bind_result($stmt,
			$colId,
			$colApproved,
			$colNomePrj,
			$colImage1,
			$colSettore
		);
		
		/* fetch values */
		$countRecord = 0;
		while (mysqli_stmt_fetch($stmt)) {
			$response->data[$countRecord]['id'] = $colId;
			$response->data[$countRecord]['approved'] = $colApproved;
			$response->data[$countRecord]['nomeprogetto'] = $colNomePrj;
			$response->data[$countRecord]['image_1'] = $colImage1;
			$response->data[$countRecord]['settore'] = $colSettore;
			$countRecord++;
		}
		
	} else {
		$response->success = false;
		$response->message = "Error: " . $conn->error;
	}
	
	$stmt->close();

	$conn->close();
	echo json_encode($response);
?>