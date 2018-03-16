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
	
	if ( isset($_GET['id']) ) {
		$stmt = $conn->prepare("
			DELETE FROM project
			WHERE id = ?
		");
		$stmt->bind_param("i", $_GET['id']);

		if ($stmt->execute()) {
			$response->message = 'Eliminazione eseguita!';
			$response->success = true;
		} else {
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		$stmt->close();
	}

	$conn->close();
	echo json_encode($response);
?>