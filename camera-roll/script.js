// #fileをcapImgに代入
let capImg = document.getElementById('file');

// capImgのchangeをイベントでファイルの選択をキャッチ
capImg.addEventListener('change', (e) => {
  // e.tagetに格納されている配列形式のfilesオブジェクトの0番目に選択したファイルを変数fileに代入
  let file = e.taget.files[0];

  // FileReaderオブジェクトを作成して変数flrdrに代入
  let flrdr = new FileReader();
  // readAsDataURLメソッドに選択したファイルオブジェクトを渡すとresultプロパティにURL形式でデータが入る
  flrdr.readeAsDataURL(file)
  // flrdrで選択ファイルの読み込みが完了したら
  flrdr.addEventListener('load', () => {
    // flrdrに代入されたFileReadeオブジェクトのresultプロパティの値を変数urlに代入
    let url = flrdr.result;
    // Imageオブジェクトを作成して変数imgに代入
    let img = new Image();
    // srcにurlを代入する
    img.src = url;
    // console.log(img);
    // img_wrapprにimg
    document.getElementById('img_wrapper').appendChild(img);
  })
})