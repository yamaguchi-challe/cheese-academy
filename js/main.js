// jsを記述する際はここに記載していく

// ヘッダーから各コンテンツへスクロール
$('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;  //idの上部の距離を取得
    $('body,html').animate({scrollTop: pos-121}, 1000); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return true;
  });

// ページの先頭へスクロール
$('#start a[href*="#"]').click(function () {
  $('body,html').animate({scrollTop: 0}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return true;
});