

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDymy298myj6KDoj7iqIFm5FAFx3eIVBnM",
    authDomain: "soshina-fe2bf.firebaseapp.com",
    databaseURL: "https://soshina-fe2bf.firebaseio.com",
    projectId: "soshina-fe2bf",
    storageBucket: "soshina-fe2bf.appspot.com",
    messagingSenderId: "73273954475"
  };
  firebase.initializeApp(config);

  //View All fires when loaded


  ref = firebase.storage().ref().child('img/sample.jpg');
ref.getDownloadURL().then((url) => {
  document.getElementById('embed').src = url;
});







//ストレージのルートのリファレンスを取得
var storageRef = firebase.storage().ref();
//ストレージのルートにあるsample.pngのリファレンスを取得    
var imgSample = storageRef.child('sample.png');

window.onload = function() {
    //htmlロード完了したらストレージの画像を表示してみる
    imgSample.getDownloadURL().then(function(url){
      document.getElementById("embed").style.backgroundImage = "url("+url+")";


    }).catch(function(error) {
      // Handle any errors
      console.log(error);
      console.log(url);
    });
  };


//アップロード処理

  
//時刻データを取得して変数jikanに格納する
var jikan = new Date();

//時・分・秒を取得する
var hour = jikan.getHours();
var minute = jikan.getMinutes();
var second = jikan.getSeconds();

console.log (jikan);

//ランダム数

  var rand = Math.random();

  console.log(rand);


var btnUploadChange = function(ev){
 var zzz=ev.target.files[0].name;
    
    //ストレージへアップロードするファイルのパスを生成する
  var zzz =jikan + rand +zzz;

    console.log(zzz);

    var uploadRef = storageRef.child(zzz);
    const f = ev.target.files[0];
    uploadRef.put(f).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
 
      //アップロードしたファイルを表示してみる
      uploadRef.getDownloadURL().then(function(url){
        console.log("imgSample "+url);
        // document.getElementById("imgSample").style.backgroundImage = "url("+url+")";

        
        var go =document.createElement('EMBED');
        go.src = url;
        document.body.appendChild(go);
      }).catch(function(error) {
        // Handle any errors
        console.log(error);
      });
 
    });
 };
 //htmlロードが完了したらボタンにイベントを設定
 window.onload = function() {
  document.getElementById("btnUpload").onchange = btnUploadChange;
 };

