var $form = $('form')
var $title = $('.title');
var $desc = $('.desc');
var $errors = $('.errors');
var $submit_btn = $('.submit_btn');

$submit_btn.prop('disabled', true);

function validate() {
  var error_messages = [];
  var title_length = $title.val().length;
  if (title_length < 1) error_messages.push('タイトルは必須です');
  if (title_length > 10) error_messages.push('タイトルは10文字以内でお願いします');
  
  var desc_length = $desc.val().length;
  if (desc_length < 1) error_messages.push('本文は必須です');
  if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします');
  
  $errors.html('');
  if (error_messages.length>0) {
    for(var cnt=0; cnt<error_messages.length; cnt++) {
      $errors.append('<li>'+error_messages[cnt]+'</li>');
    }
    $submit_btn.prop('disabled', true);
  } else {
    $submit_btn.prop('disabled', false);
  }
}

$form.on('submit', function(e){
  e.preventDefault();
  $title.val('');
  $desc.val('');
  alert('入力内容が送信されました');
});

$title.on('keyup', validate);

$desc.on('keyup', validate);