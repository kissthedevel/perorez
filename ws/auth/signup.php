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

					//______________________________
					//*****************************||
					//*****INVIO mail con dati*****||
					//*****************************||
					error_reporting(E_ALL);

					// Genera un boundary
					$mail_boundary = "=_NextPart_" . md5(uniqid(time()));
					
					$to = $email;
					$sender = "penknife@penknifeinvestment.com";
					$subject = "PENKNIFE Investment || Registrazione Effettuata! - Registration completed ";
											
					$headers = "From: $sender\n";
					$headers .= "MIME-Version: 1.0\n";
					$headers .= "Content-Type: multipart/alternative;\n\tboundary=\"$mail_boundary\"\n";
					$headers .= "X-Mailer: PHP " . phpversion();
						
					// Corpi del messaggio nei due formati testo e HTML
					$text_msg = "messaggio in formato testo";
					$html_msg = "<b>messaggio</b> in formato <p><a href='http://www.aruba.it'>html</a><br><img src=\"http://hosting.aruba.it/image_top/top_01.gif\" border=\"0\"></p>";
						
					// Costruisci il corpo del messaggio da inviare
					$msg = "This is a multi-part message in MIME format.\n\n";
					$msg .= "--$mail_boundary\n";
					$msg .= "Content-Type: text/plain; charset=\"iso-8859-1\"\n";
					$msg .= "Content-Transfer-Encoding: 8bit\n\n";
					$msg .= "\n";

					//MESSAGGIO ITALIANO
					$msg .= "Caro " . $data->nome . " " . $data->cognome . ", complimenti per essere entrato a far parte del mondo PENKNIFE!\n\n";
					$msg .= "Di seguito i tuoi dati personali per accedere alla piattaforma.\n\n";
					$msg .= "Email: \t\t ". $email . "\n";
					$msg .= "Password: \t\t ". $password . "\n\n\n";
					$msg .= "-------------------------------------------------------------------------\n\n";

					//MESSAGGIO CINESE
					$msg .= "亲爱的 " . $data->nome . " " . $data->cognome . "，恭喜您加入PENKNIFE世界！ \n\n";
					$msg .= "以下是您访问该平台的个人信息。 \n\n";
					$msg .= "电子邮件： \t\t ". $email . "\n";
					$msg .= "密码： \t\t ". $password . "\n\n\n";
					$msg .= "-------------------------------------------------------------------------\n\n";
						
					// Boundary di terminazione multipart/alternative
					$msg .= "\n--$mail_boundary--\n";						
					// Imposta il Return-Path (funziona solo su hosting Windows)
					ini_set("sendmail_from", $sender);
					mail($to, $subject, $msg, $headers, "-f$sender");
					//*****************************||
					//*****************************||
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