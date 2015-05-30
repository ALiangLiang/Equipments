window.Fields = {
  xhr : function(e, type, url, data, onload) {
   var xhr = new XMLHttpRequest();
   xhr.open(type, url);
   xhr.onload = onload;
   xhr.send();
  }
}

function login() {
  Fields.xhr(this, "POST", "../Rear/login.php", "", function(e){
    document.getElementById("nav").setAttribute("items", JSON.stringify([["month.html", "場地月曆"], ["#logout", "登出"]]));
  });
}