<?php
	require_once('../parameters.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
	
	$data = json_decode( file_get_contents('php://input') );

	$email = $data->email;
    
	//TODO controlli validita campi
	$checkValidityFields = true;


	if ( $checkValidityFields === true ) {
		error_reporting(E_ALL);
	
		// Genera un boundary
		$mail_boundary = "=_NextPart_" . md5(uniqid(time()));
			
		$to = "penknife@penknifeinvestment.com";
		$subject = $data->oggetto;
		$sender = $email;
	
			
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
		$msg .= "<b>Mittente: </b>" . $data->nominativo . "\n\n";
		$msg .= $data->messaggio;
			
		// Boundary di terminazione multipart/alternative
		$msg .= "\n--$mail_boundary--\n";
			
		// Imposta il Return-Path (funziona solo su hosting Windows)
		ini_set("sendmail_from", $sender);
			
		// Invia il messaggio, il quinto parametro "-f$sender" imposta il Return-Path su hosting Linux
		if (mail($to, $subject, $msg, $headers, "-f$sender")) { 
			$response->success = true;
			$response->message = "MESSAGGIO_INVIATO";
			/*highlight_file($_SERVER["SCRIPT_FILENAME"]);
			unlink($_SERVER["SCRIPT_FILENAME"]);*/
		} else { 
			$response->success = false;
			$response->message = "MESSAGGIO_FALLITO";
		}
	} else {
		//TODO gestire messaggio errore campi obbligatori
		$response->success = false;
		$response->message = "Error: invalid fields";
	}		

	echo json_encode($response);
?>