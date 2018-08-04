$(function(){

  class Tabs {
    /**
     * Constructor
     */
    constructor($rootElem) {
      this.num = 0;
      this.$tabs = $rootElem.find('.tabs li');
      this.$tabContents = $rootElem.find('.tab-contents li');
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
     * @param $elems elements DOM Element
     */
    eventHandle() {
      let self = this;
      this.$tabs.on('click', function () {
        let num = self.$tabs.index($(this));
        self.switchTab(num);
      });
    }
  }

  let topTabs = new Tabs($('#top-tab'));
  topTabs.eventHandle();
  let bottomTabs = new Tabs($('#bottom-tab'));
  bottomTabs.eventHandle();
});