$(function(){

  class Tabs {
    /**
     * Constructor
     */
    constructor() {
      this.num = 0;
      this.$tabs = $('.tabs li');
      this.$tabContents = $('.tab-contents li');
      this.switchTab(this.num);
    }

    /**
     * Switch Tab & Tab Content
     *
     * @param num int Clicked tab index
     */
    switchTab(num) {
      this.$tabs.removeClass('active');
      this.$tabContents.removeClass('active');
      this.$tabs.eq(num).addClass('active');
      this.$tabContents.eq(num).addClass('active');
    }

    /**
     * event handler
     *
     * @param $elem elements DOM Element
     */
    eventHandle($elem) {
      let self = this;
      $elem.on('click', function () {
        let num = $elem.index(this);
        self.switchTab(num);
      });
    }
  }

  let tabs = new Tabs();
  tabs.eventHandle($('.tabs li'));
});