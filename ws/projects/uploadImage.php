<?php
	require_once('../parameters.php');

	class PENKNIFEResponse {
		var $success;
		var $message;
		var $data = [];
	}
	$response = new PENKNIFEResponse;
    
    //INIZIO perte relativa eleborazione file
    // per prima cosa verifico che il file sia stato effettivamente caricato
    if (!isset($_FILES['userfile']) || !is_uploaded_file($_FILES['userfile']['tmp_name'])) {
        $response->success = false;
        $response->message = 'Non hai inviato nessun file...';
        echo json_encode($response);
        exit;
    }

    //percorso della cartella dove mettere i file caricati dagli utenti
    $uploaddir = '../../imgrepo/projectsimages/';
    //Recupero il percorso temporaneo del file
    $userfile_tmp = $_FILES['userfile']['tmp_name'];
    //recupero il nome originale del file caricato
    $userfile_name = $_FILES['userfile']['name'];

    // limito la dimensione massima a 2MB
    if ($_FILES['userfile']['size'] > 2097152) {
        $response->success = false;
        $response->message = 'Il file è troppo grande!';
        echo json_encode($response);
        exit;
    }

    $is_img = getimagesize($_FILES['userfile']['tmp_name']);
    if (!$is_img) {
        $response->success = false;
        $response->message = 'Puoi inviare solo immagini';
        echo json_encode($response);
        exit;    
    }

    $temp_extension = explode('.', $_FILES['userfile']['name']);
    $extension = end($temp_extension);


	// Create connection
	$conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
	// Check connection
	if ($conn->connect_error) {
// 		die("Connection failed: " . $conn->connect_error);
		$response->success = false;
		$response->message = "Error: " . $conn->connect_error;
	}
	
	$stmt = $conn->prepare(
        "INSERT INTO projectimage ( formato )
         VALUES ( ? )"
    );
    
    $stmt->bind_param( "s", $extension );
    
    if ($stmt->execute()) {
        if ($stmt->insert_id) {

            //copio il file dalla sua posizione temporanea alla mia cartella upload
            $url = $uploaddir . $stmt->insert_id . '.' . $extension;
            
            if (move_uploaded_file($userfile_tmp, $url)) {
                //Se l'operazione è andata a buon fine...
                $response->success = true;
                $response->message = 'File inviato con successo.';
                array_push( $response->data, $stmt->insert_id . '.' . $extension);
            }else{
                //Se l'operazione è fallta...
                $response->success = false;
                $response->message = 'Upload NON valido!'; 
            }
        }
    } else {
        $response->success = false;
        $response->message = "Error: " . $conn->error;
    }
    
    $stmt->close();
    $conn->close();
    
	echo json_encode($response);
?>