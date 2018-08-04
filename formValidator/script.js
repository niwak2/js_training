$(function(){
  class Validator {
    /**
     * Constructor
     */
    constructor() {
      this.$form = $('form');
      this.$title = $('.title');
      this.$desc = $('.desc');
      this.$errors = $('.errors');
      this.$submit_btn = $('.submit_btn');
      this.$submit_btn.prop('disabled', true);
    }

    /**
     * validation method
     */
    validate() {
      let error_messages = [];
      let title_length = this.$title.val().length;
      if (title_length < 1) error_messages.push('タイトルは必須です');
      if (title_length > 10) error_messages.push('タイトルは10文字以内でお願いします');

      let desc_length = this.$desc.val().length;
      if (desc_length < 1) error_messages.push('本文は必須です');
      if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします');

      this.$errors.html('');
      if (error_messages.length > 0) {
        for(let cnt=0; cnt < error_messages.length; cnt++) {
          this.$errors.append('<li>' + error_messages[cnt] + '</li>');
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
    }
  }

  let v = new Validator();
  v.eventHandle();
});

