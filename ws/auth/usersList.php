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
	
	if ( isset($_GET['user']) && $administrator ) {

		$offset = isset($_GET['offset']) ? $_GET['offset'] : 0;
			
		$stmt = $conn->prepare("
			SELECT a.id, a.attivo, a.nome, a.cognome, a.account_type, a.sesso
			FROM users a
			ORDER BY a.attivo ASC
			LIMIT 10000 OFFSET ?
		");
		$stmt->bind_param("i", $offset);
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result(	$stmt,
										$colId,
										$colAttivo,
										$colNome,
										$colCognome,
										$colAccountType,
										$colSesso);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['attivo'] = $colAttivo;
				$response->data[$countRecord]['nome'] = $colNome;
				$response->data[$countRecord]['cognome'] = $colCognome;
				$response->data[$countRecord]['account_type'] = $colAccountType;
				$response->data[$countRecord]['sesso'] = $colSesso;
				$response->data[$countRecord]['nominativo'] = $colCognome . ' ' . $colNome;
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