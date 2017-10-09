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
    
	//TODO controlli validita
	
	$idRecordForDescription = !$data -> id ? null : $data -> id;

	if( !$data -> id ) {	//INSERT
		$stmt = $conn->prepare(
			"INSERT INTO company (
				nomeazienda, website, tilecolor,
				tilesize, tilelogo, latency,
                creator, elite
			)
			VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )"
		);
		
		$stmt->bind_param("sssssiii",
			$data->nomeazienda, $data->website, $data->tilecolor,
            $data->tilesize, $data->tilelogo, $data->latency,
            $data->creator, $data->elite
		);
		
		if ($stmt->execute()) {
			if ($stmt->insert_id) {
				$idRecordForDescription = $stmt->insert_id;
				array_push( $response->data, $stmt->insert_id);
				$response->message = 'Inserimento eseguito con successo!';
				$response->success = true;
			}
		} else {
			$response->success = false;
			$response->message = "Error: " . $conn->error;
		}
		
		$stmt->close();
	}else {	//UPDATE
		$idRecordForDescription = $data -> id;
// 		$sql = "UPDATE attivita
// 				SET 
// 					altezzamax = " . $data->altezzamax . ", altezzapart = " . $data->altezzapart . ", bpmmax = " . $data->bpmmax . ",
// 					bpmmedia = " . $data->bpmmedia . ", climatemperatura = " . $data->climatemperatura . ", climatempo = " . $data->climatempo . ",
// 					climavento = " . $data->climavento . ", data = " . $data->data . ", ora = " . $data->ora . ",
// 					dislivellomen = " . $data->dislivellomen . ", dislivellopos = " . $data->dislivellopos . ", distanzaattivita = " . $data->distanzaattivita . ",
// 					distsalita = " . $data->distsalita . ", isgara = " . $data->isgara . ", kcal = " . $data->kcal . ",
// 					tempogara = " . $data->tempogara . ", tempoattivita = " . $data->tempoattivita . ", tempozonacardio = " . $data->tempozonacardio . ",
// 					nomegara = " . $data->nomegara . ", noteattivita = " . $data->noteattivita . ", pendenzamax = " . $data->pendenzamax . ",
// 					pendenzamed = " . $data->pendenzamed . ", posassoluto = " . $data->posassoluto . ", poscategoria = " . $data->poscategoria . ",
// 					sport = " . $data->sport . ", totclassificati = " . $data->totclassificati . ", velmax = " . $data->velmax . ",
// 					velmedia = " . $data->velmedia . ", idatleta = " . $data->idatleta . "
// 				WHERE id = " . $data->id . " ";
// 		if ($conn->query($sql) === TRUE) {
// 			echo "New record updated successfully";
// 		} else {
// 			echo "Error: " . $sql . "<br>" . $conn->error;
// 		}
		echo 'da gestire';
	}

	//sezione salvataggio descrizioni
	if ($idRecordForDescription) {
		$languages = array('zh', 'it', 'en');
		$langFields = array($data->descrchina, $data->descritaly, $data->descrenglish);

		for ($i=0; $i < 3; $i++) { 
			$descriptionSelectSuccess = false;
			$descriptionUpdate = false;

			//verifico esistenza record
			$stmt = $conn->prepare("
				SELECT a.id
				FROM descriptions a
				WHERE a.id_company = ?
				AND a.language = ?
			");
			$stmt->bind_param("is", $idRecordForDescription, $languages[$i]);

			if ($stmt->execute()) {
				$descriptionSelectSuccess = true;
				$result = $stmt->get_result();
				if ($result->num_rows > 0) {
					$countRecord = 0;
					while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
						$descriptionUpdate = $row['id'];
					}
				}
			}
			$stmt->close();
			//FINE verifica esistenza record

			if ($descriptionSelectSuccess) {
				//se gia' esiste la descrizione si fa update ELSE insert
				if ($descriptionUpdate) {
					//TODO
				} else {
					//INSERT
					$stmt = $conn->prepare(
						"INSERT INTO descriptions (
							id_company, language, description
						)
						VALUES ( ?, ?, ? )"
					);					
					$stmt->bind_param("iss", $idRecordForDescription, $languages[$i], $langFields[$i]);
				}

				$stmt->execute();
				$stmt->close();
			}
		}
	}


	$conn->close();
	echo json_encode($response);
?>