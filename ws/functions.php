<?php
	class penknifeFunctions	{
		//constructor
		function penknifeFunctions() {
			require_once('../parameters.php');			
			return true;
		}

		public function isAdministrator($id) {
			$userIsAdministrator = false;
			// Create connection
			$conn = new mysqli(SERVERNAME, USERNAME_DB, PWD_DB, DBNAMEMAIN);
			// Check connection
			if ($conn->connect_error) {
				$userIsAdministrator = false;
			} else {
				$stmt = $conn->prepare("
					SELECT u.administrator
					FROM users u
					WHERE u.id = ?
				");
				$stmt->bind_param("i", $id);

				if ($stmt->execute())  {					
					/* bind variables to prepared statement */
					mysqli_stmt_bind_result($stmt, $colAdministrator);
					
					/* fetch values */
					$administrator = 0;
					while (mysqli_stmt_fetch($stmt)) {
						$administrator = $colAdministrator;
					}

					$userIsAdministrator = $administrator;
				} else {echo 'd';
					$userIsAdministrator = false;
				}
				
				$stmt->close();
			}

			$conn->close();

			return $userIsAdministrator;
		}
	}
?>