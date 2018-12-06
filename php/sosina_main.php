<?php
//1.  DB接続
function connect_db(){
    try {
        $pdo = new PDO('mysql:dbname=gs_f001_db10;charset=utf8;host=localhost','root','');
      } catch (PDOException $e) {
        exit('dbError:'.$e->getMessage());
      }
      return $pdo;
};

$pdo = connect_db();

//日付取得関数作成
date_default_timezone_set('Asia/Tokyo');

// $year=date("Y");
// $month=date("m");
// $day=date("d");



//前日日付取得関数作成
// $ydate=date("Y/m/d");
// echo $ydate;
//２．データ登録SQL作成
$stmt = $pdo->prepare(
"SELECT sorse
 FROM sosina_sorse_table
 WHERE sosina_sorse_table.indate = ADDDATE(CURRENT_DATE(), -1)
 ORDER BY RAND()
 ");
$status = $stmt->execute();

//３．データ表示
$view="";
if($status==false) {
    //execute（SQL実行時にエラーがある場合）
  $error = $stmt->errorInfo();
  exit("sqlError:".$error[2]);

}else{
  //Selectデータの数だけ自動でループしてくれる
  //http://php.net/manual/ja/pdostatement.fetch.php
  while( $result = $stmt->fetch(PDO::FETCH_ASSOC)){ 
    $view .= "<p>".$result["sorse"]."</p>";
  }
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>表示</title>


</head>
<body id="main">
<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="sosina_insert.php">投稿</a>
      </div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<div>
    <div class="container jumbotron"><?=$view?></div>
</div>
<!-- Main[End] -->


</body>
</html>