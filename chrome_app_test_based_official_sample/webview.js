document.addEventListener('DOMContentLoaded', function () {

    function handleInputTest(msg) {
      document.getElementById("eventDisplay").innerHTML = 'webview ' + msg;
      console.log(msg);
    }

    document.body.addEventListener('mouseup', function() { handleInputTest('mouseup');});
    document.body.addEventListener('mousedown', function() { handleInputTest('mousedown');});
    document.body.addEventListener('click', function() { handleInputTest('click');});
    document.body.addEventListener('touchstart', function() { handleInputTest('touchstart');});
    document.body.addEventListener('touchend', function() { handleInputTest('touchend');});
  });