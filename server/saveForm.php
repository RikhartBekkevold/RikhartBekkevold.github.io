<?php
require_once 'connectToDB.php';

function generateUniqueURL($length) {

    $key = '';
    $keys = array_merge(range(0, 9), range('a', 'z'));

    for ($i = 0; $i < $length; $i++) {
        $key .= $keys[array_rand($keys)];
    }

    return $key;
}


if(isset($_POST['form'])){
    $form = $_POST['form'];
    $url = $_POST['url_ID'];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO form (form, url) VALUES ('$form', '$url')";
        $conn->exec($sql);

        $last_id = $conn->lastInsertId();
        echo $last_id . $url;
    }
    catch(PDOException $e) {
        echo '<b>Operation that failed:</b> ' . $sql . "<br><b>Error Message:</b> " . $e->getMessage();
    }
}



if(isset($_POST['formID'])){
    $url = $_POST['formID'];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //insert into db
        $sth = $conn->prepare("SELECT form FROM form WHERE url='$url'");
        $sth->execute();
        $result = $sth->fetch();
        if($result != false) {
            echo($result['form']);
        }
    }
    catch(PDOException $e) {
        echo '<b>Operation that failed:</b> ' . $sql . "<br><b>Error Message:</b> " . $e->getMessage();
    }
}


if(isset($_POST['urlrequest'])){
    $id = $_POST['urlrequest'];
    echo generateUniqueURL(50);
}
