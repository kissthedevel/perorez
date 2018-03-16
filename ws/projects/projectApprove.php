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
	
	if ( isset($_GET['id']) && isset($_GET['approved']) && isset($_GET['approver']) ) {
		$stmt = $conn->prepare("
			UPDATE project
			SET approved = ?, approver = ?, join_date = ?
			WHERE id = ?
		");
		$stmt->bind_param("iisi", $_GET['approved'], $_GET['approver'], date("Y-m-d H:i:s"), $_GET['id']);
		$stmt->execute();
		$stmt->close();
	}

	$conn->close();
	echo json_encode($response);
?>