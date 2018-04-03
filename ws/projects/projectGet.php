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
		$language = isset($_GET['lang']) ? $_GET['lang'] : 'en';

		$stmt = $conn->prepare("
			SELECT a.id, a.creator, a.join_date, a.nomeprogetto, a.aziendaideatrice, a.settore, a.image_1, a.image_2, a.image_3, d.description
			FROM project a
			LEFT JOIN projectdescriptions d ON a.id = d.id_project AND d.language = ?
			WHERE a.id = ?
		");
		$stmt->bind_param("si", $language, $_GET['id']);
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt,
									$colId,
									$colCreator,
									$colJoinDate,
									$colNomeProgetto,
									$colAzienda,
									$colSettore,
									$colImage1,
									$colImage2,
									$colImage3,
									$colDescription);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['creator'] = $colCreator;
				$response->data[$countRecord]['join_date'] = $colJoinDate;
				$response->data[$countRecord]['nomeprogetto'] = $colNomeProgetto;
				$response->data[$countRecord]['aziendaideatrice'] = $colAzienda;
				$response->data[$countRecord]['settore'] = $colSettore;
				$response->data[$countRecord]['image_1'] = $colImage1;
				$response->data[$countRecord]['image_2'] = $colImage2;
				$response->data[$countRecord]['image_3'] = $colImage3;
				$response->data[$countRecord]['description'] = $colDescription;
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