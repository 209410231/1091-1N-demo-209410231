function change(index) {
    const p = document.getElementById('show');
    switch (index) {
      case 1:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w01-Introduction/intro.html">';
        break;
      case 2:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w01-Pokemon/pokemon.html">';
        break;
      case 3:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w02-Blog/blog.html">';
        break;
      case 4:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w02-ImgGallery/imgGallery.html">';
        break;
      case 5:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w03-Div Demo/div.html">';
        break;
      case 6:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w04-TKU60-js/tku60_js.html">';  
        break;
      case 7:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w05-Bootstrap/nav.html">';
        break;
      case 8:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w07-Dav Demo/nav.html">';
        break;
      case 9:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w08-Microsoft Clone/index.html">';
        break;
    }
  }

  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('show');
  });
  
  