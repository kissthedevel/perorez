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
	if (isset($_GET['user'])) {
		$functions = new penknifeFunctions;
		$administrator = $functions->isAdministrator($_GET['user']);
	}
	
	// Create connection
	$conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
	// Check connection
	if ($conn->connect_error) {
// 		die("Connection failed: " . $conn->connect_error);
		$response->success = false;
		$response->message = "Error: " . $conn->connect_error;
	} 
	
	if ( $administrator && isset($_GET['id']) && isset($_GET['approved']) ) {
		$stmt = $conn->prepare("
			UPDATE users
			SET attivo = ?
			WHERE id = ?
		");
		$stmt->bind_param("ii", $_GET['approved'], $_GET['id']);
		$stmt->execute();
		$stmt->close();
	}

	$conn->close();
	echo json_encode($response);
?>