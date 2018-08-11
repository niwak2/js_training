$(function(){
  class Validator {
    /**
     * Constructor
     */
    constructor() {
      this.error_messages = [];
      this.$form = $('form');
      this.$title = $('.title');
      this.$desc = $('.desc');
      this.$any = $('.any');
      this.$errors = $('.errors');
      this.$submit_btn = $('.submit_btn');
      this.$submit_btn.prop('disabled', true);
      this.eventHandle();
    }

    /**
     * add error message
     *
     * @param $elem jQuery DOM element
     * @return void
     */
    addErrorMessage($elem) {
      let len = $elem.val().length;
      let labelText = $elem.prev().text();

      if ($elem.attr('data-valid')) {
        if (len < 1) {
          this.error_messages.push(labelText + 'は必須です');
          return;
        }
      }
      if ($elem.attr('data-max')) {
        if (len > parseInt($elem.attr('data-max'))) {
          this.error_messages.push(labelText + 'は' + $elem.attr('data-max') + '文字以内でお願い致します');
        }
      }
    }

    /**
     * validation method
     */
    validate() {
      this.error_messages = [];
      this.addErrorMessage(this.$title);
      this.addErrorMessage(this.$desc);
      this.addErrorMessage(this.$any);

      this.$errors.html('');
      if (this.error_messages.length > 0) {
        for(let cnt=0; cnt < this.error_messages.length; cnt++) {
          this.$errors.append('<li>' + this.error_messages[cnt] + '</li>');
        }
        this.$submit_btn.prop('disabled', true);
      } else {
        this.$submit_btn.prop('disabled', false);
      }
    }

    /**
     * event Handler
     */
    eventHandle() {
      var self = this;
      this.$form.on('submit', function(e){
        e.preventDefault();
        self.$title.val('');
        self.$desc.val('');
        alert('入力内容が送信されました');
      });

      this.$title.on('keyup', function(){
        self.validate();
      });

      this.$desc.on('keyup', function(){
        self.validate();
      });

      this.$any.on('keyup', function(){
        self.validate();
      });
    }
  }

  let v = new Validator();
});

