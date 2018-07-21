$(function(){
  class SlideShow {
    constructor($box, interval) {
      this.count = 0;
      this.interval = interval;
      this.imgs = $box.find('.view-item').children('img');
      this.imgs.eq(0).addClass("show"); // 初期値設定
    }

    slide() {
      this.imgs.eq(this.count).removeClass("show");
      this.count++;
      if(this.count >= this.imgs.length) {
        this.count = 0;
      }
      this.imgs.eq(this.count).addClass("show");
    }

    eventHandle() {
      var self = this;
      setInterval(function() { self.slide(); }, this.interval);
    }
  }

  let $boxs = $('.viewer-box');
  for (let i=0; i < $boxs.length; i++) {
    let slide_show = new SlideShow($boxs.eq(i), (Math.floor( Math.random() * (5 + 1 - 1) ) + 1) * 1000);
    slide_show.eventHandle();
  }
  /*
  var a = new SlideShow($boxs.eq(0));
  a.eventHandle();

  var b = new SlideShow($boxs.eq(1));
  b.eventHandle();

  var c = new SlideShow($boxs.eq(2));
  c.eventHandle();
  */
});