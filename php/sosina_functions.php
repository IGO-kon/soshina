<?php

//connectDB
function connect_db(){
try {
    $pdo = new PDO('mysql:dbname=gs_f001_db10;charset=utf8;host=localhost','root','');
  } catch (PDOException $e) {
    exit('dbError:'.$e->getMessage());
  };
};
  
//


?>