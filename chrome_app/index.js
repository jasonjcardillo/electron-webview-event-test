document.addEventListener('DOMContentLoaded', function () {
      document.body.addEventListener('mouseup', function() { document.getElementById("test").innerHTML = "mouseup";});
      document.body.addEventListener('mousedown', function() { document.getElementById("test").innerHTML = "mousedown"});
      document.body.addEventListener('click', function() { document.getElementById("test").innerHTML = "click"});
      document.body.addEventListener('touchstart', function() { document.getElementById("test").innerHTML = "touchstart"});
      document.body.addEventListener('touchend', function() { document.getElementById("test").innerHTML = "touchend"});
    });