$(function(){
  function slideShow() {
    var count = 0;
    var interval = 3000;

    return {
      $imgs: $('.view-item').children('img'),
      init: function() {
        this.$imgs.eq(0).addClass("show"); // 初期値設定
        var self = this;
        setInterval(function() { self.slide(); }, interval);
      },
      slide: function() {
        this.$imgs.eq(count).removeClass("show");
        count++;
        if(count >= this.$imgs.length) {
          count = 0;
        }
        this.$imgs.eq(count).addClass("show");
      }
    }
  };

  var slideShow = slideShow();
  slideShow.init();
});