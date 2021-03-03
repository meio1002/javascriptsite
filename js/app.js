//  ハンバーガーメニュー
const hamburger = () => {
    const hamSwitch = document.getElementById('hamSwitch');
    const hamList = document.getElementById('hamList');

    hamSwitch.addEventListener('click',function(e) {
        hamList.classList.toggle('in');
    })
};
hamburger();