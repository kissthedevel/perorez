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
			SELECT 	a.id,
					a.timestamp_reg,
					a.attivo,
					a.account_type,
					a.username,
					a.email,
					a.nome,
					a.cognome,
					a.sesso,
					a.datanascita,
					a.telefono,
					a.nazione,
					a.citta,
					a.azienda,
					a.settore,
					a.ruolo,
					a.fatturato,
					a.patrimonio,
					a.investitore
			FROM users a
			WHERE a.id = ?
		");
		$stmt->bind_param("i", $_GET['id']);
		
		if ($stmt->execute()) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result($stmt,
									$colId,
									$colTimestampReg,
									$colAttivo,
									$colAccountType,
									$colUsername,
									$colEmail,
									$colNome,
									$colCognome,
									$colSesso,
									$colDatanascita,
									$colTelefono,
									$colNazione,
									$colCitta,
									$colAzienda,
									$colSettore,
									$colRuolo,
									$colFatturato,
									$colPatrimonio,
									$colInvestitore);
			
			/* fetch values */
			$countRecord = 0;
			while (mysqli_stmt_fetch($stmt)) {
				$response->data[$countRecord]['id'] = $colId;
				$response->data[$countRecord]['timestamp_reg'] = $colTimestampReg;
				$response->data[$countRecord]['attivo'] = $colAttivo;
				$response->data[$countRecord]['account_type'] = $colAccountType;
				$response->data[$countRecord]['username'] = $colUsername;
				$response->data[$countRecord]['email'] = $colEmail;
				$response->data[$countRecord]['nome'] = $colNome;
				$response->data[$countRecord]['cognome'] = $colCognome;
				$response->data[$countRecord]['sesso'] = $colSesso;
				$response->data[$countRecord]['datanascita'] = $colDatanascita;
				$response->data[$countRecord]['telefono'] = $colTelefono;
				$response->data[$countRecord]['nazione'] = $colNazione;
				$response->data[$countRecord]['citta'] = $colCitta;
				$response->data[$countRecord]['azienda'] = $colAzienda;
				$response->data[$countRecord]['settore'] = $colSettore;
				$response->data[$countRecord]['ruolo'] = $colRuolo;
				$response->data[$countRecord]['fatturato'] = $colFatturato;
				$response->data[$countRecord]['patrimonio'] = $colPatrimonio;
				$response->data[$countRecord]['investitore'] = $colInvestitore;
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