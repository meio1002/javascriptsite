//  ハンバーガーメニュー
const hamburger = () => {
    document.getElementById('hamLine1').classList.toggle('line_1');
    document.getElementById('hamLine2').classList.toggle('line_2');
    document.getElementById('hamLine3').classList.toggle('line_3');
    document.getElementById('hamList').classList.toggle('in');
  }
  document.getElementById('hamSwitch').addEventListener('click' , function () {
    hamburger();
  } );

  const menu = document.querySelectorAll(".js-menu");
  

  function toggle() {
    const content = this.nextElementSibling;
    this .classList.toggle("is-active");
    this .classList.toggle("aicon1");
    this .classList.toggle("aicon2");
    content.classList.toggle("is-open");
  }
  
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
  }

  const link = document.querySelectorAll(".hamListLink");
  const ListLink = (event) => {
    let iframe = document.getElementById('iframe');
    let getId = event.target.id;
    iframe.innerHTML = '<iframe src="' + getId + '.html" width="100%" height="99%" id="' + getId + '" frameborder="0" ></iframe>';

  }
  
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click",  ListLink);
  }

//   document.getElementById('form').addEventListener('click', function (event){
//       let iframe = document.getElementById('iframe');
//       let iframe = document.createElement('iframe');
//         iframe.setAttribute('src', event.target.id + '.html');
//         iframe.setAttribute('id', event.target.id);
//       console.log(event.target.id)
//       let getId = event.target.id;
//       iframe.innerHTML = '<iframe src="' + getId + '.html" width="100%" height="100%" id="' + getId + '" ></iframe>';
//   })
