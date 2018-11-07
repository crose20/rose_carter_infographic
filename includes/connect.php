<?php
$host = "localhost";
$user = "root";
$pw = "root";
$db = "db_solar_system";

$conn = mysqli_connect($host, $user, $pw, $db);

if (!$conn) {
    echo "no soup for you!";
    die;
}

//echo "connected";

if (isset($_GET["label"])) {
    $theLabel = $_GET["label"];
    $myQuery = "SELECT * FROM labels WHERE label='$theLabel'";

    $result = mysqli_query($conn, $myQuery);

    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}
?> 