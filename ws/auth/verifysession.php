<?php
	require_once('../parameters.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
	
	if (isset($_COOKIE["member_email"])
			&& $_COOKIE["member_email"] != ""
				&& isset($_COOKIE["member_password"])
					&& $_COOKIE["member_password"] != "" ) {

		$response->data[0]['email'] = $_COOKIE["member_email"];
		$response->data[0]['password'] = $_COOKIE["member_password"];

		$response->success = true;
		$response->message = 'UTENTE_IN_SESSIONE';
	} else {
		$response->success = false;
		$response->message = 'NESSUN_UTENTE_IN_SESSIONE';
	}

	echo json_encode($response);
?>