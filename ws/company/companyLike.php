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

		//Se esiste il like lo distruggo (dislike)
		//altrimenti creo il record (LIKE)
		if ($likeSelectSuccess) {
			if ($likeId) {
				//DELETE
				$stmt = $conn->prepare("
					DELETE FROM companylikes
					WHERE id = ?
				");
				$stmt->bind_param("i", $likeId);
		
				if ($stmt->execute()) {
					$response->message = 'Dislike!';
					$response->success = true;
				} else {
					$response->success = false;
					$response->message = "Error: " . $conn->error;
				}
				
			} else {
				//INSERT
				$stmt = $conn->prepare(
					"INSERT INTO companylikes (	id_user, id_company	)
						VALUES ( ?, ? )"
				);					
				$stmt->bind_param("ii", $idUser, $idCompany);

				if ($stmt->execute()) {
					if ($stmt->insert_id) {
						array_push( $response->data, $stmt->insert_id);
						$response->message = 'Like confermato!';
						$response->success = true;
					}
				} else {
					$response->success = false;
					$response->message = "Error: " . $conn->error;
				}
			}

			$stmt->close();
		}
	} else {
		$response->success = false;
		$response->message = "Error: " . "Parametri non validi per funzionalita' like.";
	}

	$conn->close();
	echo json_encode($response);
?>