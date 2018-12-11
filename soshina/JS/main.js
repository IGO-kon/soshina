

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

//ストレージのルートのリファレンスを取得
var storageRef = firebase.storage().ref();
//ストレージのルートにあるsample.pngのリファレンスを取得    
var imgSample = storageRef.child('sample.png');

window.onload = function() {
    //htmlロード完了したらストレージの画像を表示してみる
    imgSample.getDownloadURL().then(function(url){
      document.getElementById("imgSample").style.backgroundImage = "url("+url+")";


    }).catch(function(error) {
      // Handle any errors
      console.log(error);
      console.log(url);
    });
  };

//   console.log(url);

  var btnUploadChange = function(ev){
      var zzz=ev.target.files[0].name;
      console.log(zzz);
    //ストレージへアップロードするファイルのパスを生成する
    var uploadRef = storageRef.child(zzz);
    const f = ev.target.files[0];
    uploadRef.put(f).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
 
      //アップロードしたファイルを表示してみる
      uploadRef.getDownloadURL().then(function(url){
        console.log("imgSample "+url);
        // document.getElementById("imgSample").style.backgroundImage = "url("+url+")";

        
        var baaaaaaaka =document.createElement('img');
        baaaaaaaka.src = url;
        document.body.appendChild(baaaaaaaka);
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

