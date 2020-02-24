<?php
$conn = mysqli_connect("localhost", "root", "", "juegosmesa");
$conn->set_charset("utf8");
$result = mysqli_query($conn, "SELECT * FROM creador");


$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
exit();