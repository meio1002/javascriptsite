// フォームの設定
$(function(){
    $('#form').validate({
        rules:{
            //パスワードの  
            pass:{
                rangelength: [2,9]
            },
            //パスワード(確認）
            pass_re:{
                equalTo:'.pass'
            },
            name:{
                rangelength: [0,10]
            }
        }
    });
});
// 残りの文字数を表示
const rururu = () =>{
let name = document.getElementById('name');

let maxTextNum = name.getAttribute('maxlength');

let textMs = document.createElement('div');
let parent = name.parentElement;
parent.insertBefore(textMs, name);

name.addEventListener('keyup', function() {
    let bbb = name.value.length;
    textMs.innerHTML = '<p>あと「' + (maxTextNum - bbb) + '」文字</p>'; 
});
}
rururu();
// 最初に表示しておく文字
const hahaha = () => {
const input = document.getElementsByTagName('input');
input[0].addEventListener('focus', (event) => {
    if(input[0].value == '10文字まで'){
        input[0].value = "";
    }
});
input[0].addEventListener('blur', (event) => {
    if(input[0].value == ''){
        input[0].value = "10文字まで";
    }
});
}
hahaha();