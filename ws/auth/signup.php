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

	$data = json_decode( file_get_contents('php://input') );

	//$username = $conn->real_escape_string($data->username);
	$username = null;
	$email = $conn->real_escape_string($data->email);
	$password = $conn->real_escape_string($data->password);
	
	$hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
	//TODO controlli validita campi
	$checkValidityFields = true;


	if ( $checkValidityFields === true ) {
		
		//Controllo esistenza account
		$accountAlreadyExist = false;
		
		$stmtExist = $conn->prepare("SELECT id, email FROM users WHERE email = ? ");
		$stmtExist->bind_param("s", $email);

		if ( $stmtExist->execute() ) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result( $stmtExist, $colId, $colEmail );
			/* fetch values */
			$countEmail = 0;
			while ( mysqli_stmt_fetch($stmtExist) ) {
				$countEmail++;
				$accountAlreadyExist = true;
				$response->message = 'ACCOUNT_ESISTENTE';
			}
		} else {
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		
        $stmtExist->close();



		if( $accountAlreadyExist === false ) {	//INSERT
			$stmt = $conn->prepare(
				"INSERT INTO users (
					timestamp_reg,			attivo,					administrator,		
					account_type,			check_datipers,			check_privacy,
					username,				email,					password,
					nome,					cognome,				sesso,
					datanascita,			telefono,				nazione,
					citta,					azienda,				settore,
					ruolo,					fatturato,				patrimonio,
					investitore
				)
				VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )"
			);
			
			$dateNow = date("Y-m-d H:i:s");
			$attivoDefault = 0;
			$administratorDefault = 0;

			$stmt->bind_param("siisiisssssssssssiiiii",
					$dateNow, 				$attivoDefault,			$administratorDefault,
					$data->account_type,	$data->check_datipers,	$data->check_privacy,
					$username,				$email,					$hashed_password,
					$data->nome,			$data->cognome,			$data->sesso,
					$data->datanascita,		$data->telefono,		$data->nazione,
					$data->citta,			$data->azienda,			$data->settore,
					$data->ruolo,			$data->fatturato,		$data->patrimonio,
					$data->investitore
			);
			
			if ($stmt->execute()) {
				if ($stmt->insert_id) {
					array_push( $response->data, $stmt->insert_id);
					$response->message = 'REGISTRAZIONE_SUCCESSO';
					$response->success = true;
				}
			} else {
				$response->success = false;
				$response->message = "Error: " . $conn->error;
			}
			
			$stmt->close();
		}
	} else {
		//TODO gestire messaggio errore campi obbligatori
		$response->success = false;
		$response->message = "Error: invalid fields";
	}		


	$conn->close();
	echo json_encode($response);
?>