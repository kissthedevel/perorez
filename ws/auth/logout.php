<?php
	require_once('../parameters.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
	
	if (isset($_COOKIE["member_email"]) && isset($_COOKIE["member_password"])  && isset($_COOKIE["member_id"])) {
		setcookie("member_email", "");
		setcookie("member_password", "");
		setcookie("member_id", "");

		$response->success = true;
		$response->message = 'COOKIES_EMPTY';
	} else {
		$response->success = false;
		$response->message = 'NESSUN_UTENTE_IN_SESSIONE';
	}

	echo json_encode($response);
?>