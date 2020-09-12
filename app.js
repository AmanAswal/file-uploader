var loadFileFirst = function (event) {
    var image = document.getElementById("output");  // id defined in img tag in html
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  var loadFile = function (event) {
    var image = document.getElementById("secondOutput");  // id defined in img tag in html
    image.src = URL.createObjectURL(event.target.files[0]);
  };