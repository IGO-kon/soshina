<?php
//入力チェック(受信確認処理追加)
// if(
//   !isset($_POST['name']) || $_POST['name']=="" ||
//   !isset($_POST['lid']) || $_POST['lid']=="" ||
//   !isset($_POST['lpw']) || $_POST['lpw']=="" ||
//   !isset($_POST['kanri_flg']) || $_POST['kanri_flg']=="" ||
//   !isset($_POST['life_flg']) || $_POST['life_flg']=="" 
// ){
//   exit('ParamError');
// }

//1. POSTデータ取得
$sorse   = $_POST['sorse'];
// $lid  = $_POST['lid'];
// $lpw = $_POST['lpw'];
// $kanri_flg  = $_POST['kanri_flg'];
// $life_flg = $_POST['life_flg'];


//2. DB接続します(エラー処理追加)
function connect_db(){
    try {
        $pdo = new PDO('mysql:dbname=gs_f001_db10;charset=utf8;host=localhost','root','');
      } catch (PDOException $e) {
        exit('dbError:'.$e->getMessage());
      }
      return $pdo;
};

$pdo = connect_db();

//３．データ登録SQL作成
$sql = 'INSERT INTO '. $sosina_sorse_table .'(sorse_id, maker_id, sorse, pass, indate)
VALUES(1, 1, :a2, :3, :4, :5)';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':a2', $sorse, PDO::PARAM_STR);
// $stmt->bindValue(':a2', $lid, PDO::PARAM_STR);
// $stmt->bindValue(':a3', $lpw, PDO::PARAM_STR);
// $stmt->bindValue(':a4', $kanri_flg, PDO::PARAM_INT);
// $stmt->bindValue(':a5', $life_flg, PDO::PARAM_INT);
$status = $stmt->execute();

//４．データ登録処理後
if($status==false){
  errorMsg($stmt);
}else{
  //５．index.phpへリダイレクト
  header('Location: sosina_main.php');
  exit;
}
?>