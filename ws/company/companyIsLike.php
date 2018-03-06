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
	
	if ( isset($_GET['id_company']) && isset($_GET['id_user']) ) {
		$idCompany = $_GET['id_company'];
		$idUser = $_GET['id_user'];

		//verifico esistenza record
		$stmt = $conn->prepare("
			SELECT a.id
			FROM companylikes a
			WHERE a.id_user = ?
			AND a.id_company = ?
		");
		$stmt->bind_param("ii", $idUser, $idCompany);

		if ($stmt->execute()) {
			$likeSelectSuccess = true;
			$likeId = false;
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt, $colId);
			
			/* fetch values */
			while (mysqli_stmt_fetch($stmt)) {
				$likeId = $colId;
			}
		}
		$stmt->close();
		//FINE verifica esistenza record

		if ($likeSelectSuccess) {
			$response->success = true;
			if ($likeId) {
				array_push( $response->data, $likeId);				
			}
		}
	} else {
		$response->success = false;
		$response->message = "Error: " . "Parametri non validi per funzionalita' like.";
	}

	$conn->close();
	echo json_encode($response);
?>