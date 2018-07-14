$(function(){
  const viewItemWidth = $('.view-item').outerWidth(); // .view-itemの幅を取得して代入
  const viewItemNum = $('.view-item').length;  // .view-itemの数を取得して代入
  const viewerBoxWidth = viewItemWidth * viewItemNum;

  var nowPosition = 0;

  $('.viewer-box').css('width', viewerBoxWidth);

  function slide() {
    $('.viewer-box').animate({
      left: nowPosition * -viewItemWidth
    });
  }

  $('#back').on('click', function () {
    nowPosition--;
    console.log('left', nowPosition);
    if (nowPosition < 0) {
      nowPosition = viewItemNum - 1;
    }
    slide();
  });

  $('#next').on('click', function () {
    nowPosition++;
    console.log('right', nowPosition);
    if (nowPosition > viewItemNum - 1) {
      nowPosition = 0;
    }
    slide();
  });

});