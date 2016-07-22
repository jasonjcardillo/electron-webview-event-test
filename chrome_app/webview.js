document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('mouseup', function() {document.getElementById("test").innerHTML = "webview mouseup"});
    document.body.addEventListener('mousedown', function() {document.getElementById("test").innerHTML = "webview mousedown"});
    document.body.addEventListener('click', function() {document.getElementById("test").innerHTML = "webview click"});
    document.body.addEventListener('touchstart', function() {document.getElementById("test").innerHTML = "webview touchstart"});
    document.body.addEventListener('touchend', function() {document.getElementById("test").innerHTML = "webview touchend"});
  });