<?php
	require_once('../parameters.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
	
	$response->data[0]['email'] = $_COOKIE["member_email"];
	$response->data[0]['password'] = $_COOKIE["member_password"];
	$response->data[0]['ciccio'] = $_COOKIE["ciccio"];

	echo json_encode($response);
?>