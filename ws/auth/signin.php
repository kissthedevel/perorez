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
	    
	//TODO controlli validita campi
	$checkValidityFields = true;


	if ( $checkValidityFields === true ) {
		//Controllo esistenza account
		$accountAlreadyExist = false;
		$errorQuery = false;
		$passwordHashed = '';
		
		/*$stmtExist = $conn->prepare(
			"SELECT id, email, password, attivo, administrator, account_type, nome, cognome, citta
				FROM users
				WHERE email = ?
				AND attivo = 1 ");*/
		$stmtExist = $conn->prepare(
			"SELECT	id, 			email,			 password, 		attivo,
					administrator, 	account_type,	 nome, 			cognome,
					citta, 			nazione
				FROM users
				WHERE email = ? ");
		$stmtExist->bind_param("s", $email);

		if ( $stmtExist->execute() ) {
			$response->success = true;
			$response->message = 'Ricerca eseguita con successo!';
			
			/* bind variables to prepared statement */
			mysqli_stmt_bind_result( 
				$stmtExist,
				$colId,
				$colEmail,
				$colPassword,
				$colAttivo,
				$colAdministrator,
				$colAccountType,
				$colNome,
				$colCognome,
				$colCitta,
				$colNazione
			);
			/* fetch values */
			$countEmail = 0;
			while ( mysqli_stmt_fetch($stmtExist) ) {
				$response->data[$countEmail]['id'] = $colId;
				$response->data[$countEmail]['email'] = $colEmail;
				//$response->data[$countEmail]['password'] = $password;
				$passwordHashed = $colPassword;
				$response->data[$countEmail]['attivo'] = $colAttivo;
				$response->data[$countEmail]['administrator'] = $colAdministrator;
				$response->data[$countEmail]['account_type'] = $colAccountType;
				$response->data[$countEmail]['nome'] = $colNome;
				$response->data[$countEmail]['cognome'] = $colCognome;
				$response->data[$countEmail]['citta'] = $colCitta;
				$response->data[$countEmail]['nazione'] = $colNazione;

				$countEmail++;
				$accountAlreadyExist = true;
			}

			if ($accountAlreadyExist === true) {
				if (password_verify($password, $passwordHashed)) {
					$response->message = 'ACCESSO_EFFETTUATO';
					setcookie("member_email", $email);
					setcookie("member_password", $password);
					setcookie("member_id", $response->data[0]['id']);
				} else {
					$response->success = false;
					$response->message = "EMAIL_PWD_ERRATO";
					$response->data = [];
				}
			}
			

		} else {
			$errorQuery = true;
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		
        $stmtExist->close();

		if( $errorQuery === false && $accountAlreadyExist === false ) {
			$response->success = false;
			$response->message = "EMAIL_PWD_ERRATO";
		}

	} else {
		//TODO gestire messaggio errore campi obbligatori
		$response->success = false;
		$response->message = "Error: invalid fields";
	}		


	$conn->close();
	echo json_encode($response);
?>