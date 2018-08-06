var action_btn = document.getElementById('action_btn');
var counter = document.getElementById('counter');
var count = 1;
var interval_id;

function start_game() {
  var btn_text = action_btn.innerHTML;
  
  if (btn_text == 'スタート') {
    interval_id = setInterval(function(){
      count++;
      counter.innerHTML = count;
    }, 200);
    action_btn.innerHTML = 'ストップ';
  } else if (btn_text == 'ストップ') {
    clearInterval(interval_id);
    action_btn.innerHTML = 'スタート';
    var li = document.createElement('li');
    if (count % 3 == 0){
      var text = document.createTextNode('カウント:'+count+' 結果: 成功');
    } else {
      var text = document.createTextNode('カウント:'+count+' 結果: 失敗');
    }
    li.appendChild(text);
    results.appendChild(li);
    count = 1;
    counter.innerHTML = count;
  }
}

action_btn.addEventListener('click', start_game);
                                        