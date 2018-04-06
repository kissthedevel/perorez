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
        $response->message = 'NO_FILE_VALID';
        echo json_encode($response);
        exit;
    }

    //percorso della cartella dove mettere i file caricati dagli utenti
    $uploaddir = '../../imgrepo/projectsattachments/';
    //Recupero il percorso temporaneo del file
    $userfile_tmp = $_FILES['userfile']['tmp_name'];
    //recupero il nome originale del file caricato
    $userfile_name = $_FILES['userfile']['name'];

    // limito la dimensione massima a 4MB
    if ($_FILES['userfile']['size'] > 4194304) {
        $response->success = false;
        $response->message = 'FILE_TOO_BIG';
        echo json_encode($response);
        exit;
    }
    

    $temp_extension = explode('.', $_FILES['userfile']['name']);
    $extension = end($temp_extension);

    $ext_ok = array('doc', 'docx', 'pdf', 'zip', 'txt', 'jpg', 'jpeg', 'png');
    if (!in_array($extension, $ext_ok)) {
        $response->success = false;
        $response->message = 'INVALID_EXT';
        echo json_encode($response);
        exit;
    }


    //preparo il nome del file
    $dateforrandom = date_create();
    $dateforrandom = date_timestamp_get($dateforrandom);

    function generateRandomString($length = 5) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    $randomFileName = $dateforrandom . generateRandomString();


    if (isset($_GET['idProject'])) {
        $idProject = $_GET['idProject'];

        // Create connection
        $conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
        // Check connection
        if ($conn->connect_error) {
        // 		die("Connection failed: " . $conn->connect_error);
            $response->success = false;
            $response->message = "Error: " . $conn->connect_error;
        }

        $stmt = $conn->prepare(
            "INSERT INTO projectattachments ( id_project, originalfilename, encrypted_name, formato )
            VALUES ( ?, ?, ?, ? )"
        );

        $stmt->bind_param( "isss", $idProject, $userfile_name, $randomFileName, $extension );

        if ($stmt->execute()) {
            if ($stmt->insert_id) {

                //copio il file dalla sua posizione temporanea alla mia cartella upload
                $url = $uploaddir . $randomFileName . '.' . $extension;
                
                if (move_uploaded_file($userfile_tmp, $url)) {
                    //Se l'operazione è andata a buon fine...
                    $response->success = true;
                    $response->message = 'FILE_SUCCESS';
                    array_push( $response->data, $randomFileName . '.' . $extension);
                }else{
                    //Se l'operazione è fallta...
                    $response->success = false;
                    $response->message = 'INVALID_UPLOAD'; 
                }
            }
        } else {
            $response->success = false;
            $response->message = "Error: " . $conn->error;
        }

        $stmt->close();
        $conn->close();
    } else {
        $response->success = false;
		$response->message = "Error: " . "idProject param empty!";
    }
    
	echo json_encode($response);
?>