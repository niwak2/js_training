$(function(){
  var slideShow = {
    $imgs: $('.view-item').children('img'),
    count: 0,
    interval: 3000,

    /**
     * Initialize slideShow
     */
    init: function() {
      this.$imgs.eq(0).addClass("show"); // 初期値設定
      var self = this;
      setInterval(function() { self.slide(); }, self.interval);
    },
    /**
     * Slide the images
     */
    slide: function() {
      this.$imgs.eq(this.count).removeClass("show");
      this.count++;
      if(this.count >= this.$imgs.length) {
        this.count = 0;
      }
      this.$imgs.eq(this.count).addClass("show");
    }
  };

  slideShow.init();
});