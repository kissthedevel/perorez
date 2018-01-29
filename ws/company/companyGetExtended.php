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
			SELECT 
				a.id,
				a.nomeazienda,
				a.website,
				a.tilecolor,
				a.tilesize,
				a.tilelogo,
				latency,
				a.elite
			FROM company a
			WHERE a.id = ?
		");
		$stmt->bind_param("i", $_GET['id']);
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt,
									$colId,
									$colNomeAzienda,
									$colWebsite,
									$colTileColor,
									$colTileSize,
									$colTileLogo,
									$colLatency,
									$colElite);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['nomeazienda'] = $colNomeAzienda;
				$response->data[$countRecord]['website'] = $colWebsite;
				$response->data[$countRecord]['tilecolor'] = $colTileColor;
				$response->data[$countRecord]['tilesize'] = $colTileSize;
				$response->data[$countRecord]['tilelogo'] = $colTileLogo;
				$response->data[$countRecord]['latency'] = $colLatency;
				$response->data[$countRecord]['elite'] = $colElite;
				$countRecord++;
			}

		} else {
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		
		$stmt->close();
		
		/*Vado a prelevare descrizioni*/
		if (count($response->data) > 0) {
			//in cinese
			$stmtChi = $conn->prepare("
				SELECT d.description
				FROM descriptions d
				WHERE d.id_company = ?
				AND d.language = ?
			");
			$siglaChi = 'zh';
			$stmtChi->bind_param("is", $_GET['id'], $siglaChi);			
			if ($stmtChi->execute()) {				
				/* bind variables to prepared statement */
				mysqli_stmt_bind_result($stmtChi, $colDescription);
				
				while (mysqli_stmt_fetch($stmtChi)) {
					$response->data[0]['descrchina'] = $colDescription;
				}
			}
			$stmtChi->close();

			//in italiano
			$stmtIta = $conn->prepare("
				SELECT d.description
				FROM descriptions d
				WHERE d.id_company = ?
				AND d.language = ?
			");
			$siglaIt = 'it';
			$stmtIta->bind_param("is", $_GET['id'], $siglaIt);			
			if ($stmtIta->execute()) {				
				/* bind variables to prepared statement */
				mysqli_stmt_bind_result($stmtIta, $colDescription);
				
				while (mysqli_stmt_fetch($stmtIta)) {
					$response->data[0]['descritaly'] = $colDescription;
				}
			}
			$stmtIta->close();

			//in inglese
			$stmtEng = $conn->prepare("
				SELECT d.description
				FROM descriptions d
				WHERE d.id_company = ?
				AND d.language = ?
			");
			$siglaEn = 'en';
			$stmtEng->bind_param("is", $_GET['id'], $siglaEn);			
			if ($stmtEng->execute()) {				
				/* bind variables to prepared statement */
				mysqli_stmt_bind_result($stmtEng, $colDescription);
				
				while (mysqli_stmt_fetch($stmtEng)) {
					$response->data[0]['descrenglish'] = $colDescription;
				}
			}
			$stmtEng->close();
		}
	}

	$conn->close();
	echo json_encode($response);
?>