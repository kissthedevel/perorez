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
	
	if ( isset($_GET['tilesize']) || isset($_GET['id']) ) {
		if ( isset($_GET['tilesize']) ) {
			$stmt = $conn->prepare("
				SELECT a.id, a.tilecolor, a.tilesize, a.tilelogo, a.latency
				FROM company a
				WHERE a.tilesize = ?
				AND a.approved = 1
				ORDER BY a.last_appear ASC
				LIMIT 1 OFFSET 0
			");
			$stmt->bind_param("s", $_GET['tilesize']);
		}
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt, $colId, $colTileColor, $colTileSize, $colTileLogo, $colLatency);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['tilecolor'] = $colTileColor;
				$response->data[$countRecord]['tilesize'] = $colTileSize;
				$response->data[$countRecord]['tilelogo'] = $colTileLogo;
				$response->data[$countRecord]['latency'] = $colLatency;
				$countRecord++;
			}
			
			
			/*$result = $stmt->get_result();
			// conteggio dei record
			if ($result->num_rows > 0) {
				$countRecord = 0;
				while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
					$response->data[$countRecord]['id'] = $row['id'];
					$response->data[$countRecord]['tilecolor'] = $row['tilecolor'];
					$response->data[$countRecord]['tilesize'] = $row['tilesize'];
					$response->data[$countRecord]['tilelogo'] = $row['tilelogo'];
					$response->data[$countRecord]['latency'] = $row['latency'];
					$countRecord++;
				}
			}*/
		} else {
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		
		$stmt->close();

		//si aggiorna il campo last_appear
        if ($response->success == true) {
            $stmt2 = $conn->prepare("
                UPDATE company
				SET last_appear = ?
				WHERE id = ?
			");
			$idToUpdate = $response->data[0]['id'];
			$appearNow = date("Y-m-d H:i:s");
			$stmt2->bind_param("si", $appearNow, $idToUpdate);
            $stmt2->execute();
            $stmt2->close();
        }
	}

	$conn->close();
	echo json_encode($response);
?>