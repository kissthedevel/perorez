<?php
	require_once('../parameters.php');
	
	// Create connection
	$conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	
	echo '<br>************************************************<br>';
	// sql to create table
	$sql = "CREATE TABLE companylogo (
				id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				formato VARCHAR(10),
				INDEX (id)
			)";
	if ($conn->query($sql) === TRUE) {
		echo "Table companylogo created successfully";
	} else {
		echo "Error creating table: " . $conn->error;
	}

	echo '<br>************************************************<br>';
	// sql to create table
	$sql = "CREATE TABLE company (
				id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				creator INT(10) NOT NULL,
				approved BOOLEAN NULL DEFAULT NULL,
				approver INT(10),
				join_date DATETIME NOT NULL,
				last_appear DATETIME NOT NULL,
				nomeazienda VARCHAR(100),
				website VARCHAR(100),
				tilecolor VARCHAR(30),
				tilesize VARCHAR(15),
				tilelogo VARCHAR(30),
				latency INT(5),

				INDEX (id),
				INDEX (creator),
				INDEX (approved),
				INDEX (tilesize)
			)";
	if ($conn->query($sql) === TRUE) {
		echo "Table company created successfully";
	} else {
		echo "Error creating table: " . $conn->error;
	}
	
	$conn->close();
?>