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
			SELECT a.id, a.creator, a.join_date, a.nomeazienda, a.website, a.tilelogo, a.elite, d.description
			FROM company a
			LEFT JOIN descriptions d ON a.id = d.id_company AND d.language = ?
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
									$colNomeAzienda,
									$colWebsite,
									$colTileLogo,
									$colElite,
									$colDescription);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['creator'] = $colCreator;
				$response->data[$countRecord]['join_date'] = $colJoinDate;
				$response->data[$countRecord]['nomeazienda'] = $colNomeAzienda;
				$response->data[$countRecord]['website'] = $colWebsite;
				$response->data[$countRecord]['tilelogo'] = $colTileLogo;
				$response->data[$countRecord]['elite'] = $colElite;
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