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
	
	if ( isset($_GET['idProject']) ) {
		
		$stmt = $conn->prepare("
			SELECT a.id, a.originalfilename, a.encrypted_name, a.formato
			FROM projectattachments a
			WHERE a.id_project = ?
			ORDER BY a.id ASC
		");
		$stmt->bind_param("i", $_GET['idProject']);			
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt, $colId, $colOrigName, $colEncryptName, $colExtension);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['originalfilename'] = $colOrigName;
				$response->data[$countRecord]['encrypted_name'] = $colEncryptName;
				$response->data[$countRecord]['formato'] = $colExtension;
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