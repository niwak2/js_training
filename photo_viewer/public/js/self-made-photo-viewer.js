$(function(){
  var PhotoViewer = {
    viewItemWidth: $('.view-item').outerWidth(),
    viewItemNum: $('.view-item').length,
    nowPosition : 0,

    /**
     * Initialize PhotoViewer
     */
    init: function() {
      $('.viewer-box').css('width', this.viewerBoxWidth());
      this.handleEvnet();
    },
    /**
     * Calculate the viewer box width
     */
    viewerBoxWidth: function(){
      return this.viewItemWidth * this.viewItemNum
    },
    /**
     * Slide with animation
     */
    slide: function() {
      $('.viewer-box').animate({
        left: this.nowPosition * -this.viewItemWidth
      });
    },
    /**
     * Managing events
     */
    handleEvnet: function() {

      var self = this;

      // Processing when the back button is clicked
      $('#back').on('click', function () {
        self.nowPosition--;
        if (self.nowPosition < 0) {
          self.nowPosition = self.viewItemNum - 1;
        }
        self.slide();
      });

      // Processing when the next button is clicked
      $('#next').on('click', function() {
        self.nowPosition++;
        if (self.nowPosition > self.viewItemNum - 1) {
          self.nowPosition = 0;
        }
        self.slide();
      });
    }
  };

  PhotoViewer.init();
});