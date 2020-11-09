function change(index) {
    const p = document.getElementById('show');
    switch (index) {
      case 1:
        p.innerHTML =
          '<iframe width=100% height=100% src="./p1/myclass_31.html">';
        break;
      case 2:
        p.innerHTML =
          '<iframe width=100% height=100% src="./p2/div_31.html">';
        break;
      case 3:
        p.innerHTML =
          '<iframe width=100% height=100% src="./p3/profile_31.html">';
        break;
  }