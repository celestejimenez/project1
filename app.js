/*
function addRow() {

  alert("7");
  text = "<ul>";
  alert(namesLen);

  for (i = 0; i < namesLen; i++) {
    alert("12");
    text += "<li>" + window.names[i] + "</li>";
    alert("11");
  }
}

let i = 1;
  while (i <= names.length) {
*/

function saveLocal () {
  // alert("1");

var namex = localStorage.getItem("names");
// var emails = localStorage.getItem("emails");
// var phones = localStorage.getItem("phones");

  if (namex) {
    // alert("yes");    
    names = JSON.parse(localStorage.getItem("names"));
    emails = JSON.parse(localStorage.getItem("emails"));
    phones = JSON.parse(localStorage.getItem("phones"));
    
  } else {
    // alert("no");
    names = [];
    emails = [];
    phones = [];
  
  localStorage.setItem("names", JSON.stringify(names));
  names = JSON.parse(localStorage.getItem("names"));
  
  localStorage.setItem("emails", JSON.stringify(emails));
  emails = JSON.parse(localStorage.getItem("emails"));

  localStorage.setItem("phones", JSON.stringify(phones));
  phones = JSON.parse(localStorage.getItem("phones"));

  }
  
  // alert("2");
  // alert(name);
  // alert(names);

  names.push(name);
  emails.push(email);
  phones.push(phone);
  // alert("6");

  localStorage.setItem('names', JSON.stringify(names));
  localStorage.setItem('emails', JSON.stringify(emails));
  localStorage.setItem('phones', JSON.stringify(phones));
  // alert("7");

  JSON.parse(localStorage.getItem('names'));
  JSON.parse(localStorage.getItem('emails'));
  JSON.parse(localStorage.getItem('phones'));
  // alert("3");
/*
  brk = names.split('~');
  res = brk.join(" <br> ");
  
  brkE = emails.split('~');
  resE = brkE.join(" <br> ");

  brkP = phones.split('~');
  resP = brkP.join(" <br> ");
*/

}

function saveInputs () {

    if (typeof(Storage) !== "undefined") {
        // Store
        
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;

        saveLocal();

        var len = document.getElementById("phone").value;
        var pLen = len.length;

        var pStr = document.getElementById("phone").value;
        var firstPos = pStr.charAt(0);
        // alert("4");
        if (pLen === 10 && firstPos !== "0" && firstPos !== "1") {

          localStorage.setItem("name", name);

          localStorage.setItem("email", email);

          localStorage.setItem("phone", phone);
          // alert("5");
          // Retrieve
          document.getElementById("name").innerHTML = localStorage.getItem("name");
          document.getElementById("email").innerHTML = localStorage.getItem("email");
          document.getElementById("phone").innerHTML = localStorage.getItem("phone");

          setTimeout('window.location = "details.html"',500);
          

        } else {
          alert('Enter a 10 digit phone number, without symbols, not beginning with 1 or 0');
        }

    } else {
        document.getElementById("name").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

/*

function defaultVal() {
    const x = localStorage.getItem("name").defaultValue;
    localStorage.getItem("name").innerHTML = x;
    alert(x);
    alert("i work");
}
*/

function warning() {
  if (confirm("Are you sure?")) {
    setTimeout('window.location = "new.html"',500);

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");

    // var filtered = names.filter()

  } else {
  }
}

function updateLocal () {
  // alert("1");

var namex = localStorage.getItem("names");
// var emails = localStorage.getItem("emails");
// var phones = localStorage.getItem("phones");

  if (namex) {
    // alert("yes");    
    names = JSON.parse(localStorage.getItem("names"));
    emails = JSON.parse(localStorage.getItem("emails"));
    phones = JSON.parse(localStorage.getItem("phones"));
    
  } else {
    // alert("no");
    names = [];
    emails = [];
    phones = [];
  
  localStorage.setItem("names", JSON.stringify(names));
  names = JSON.parse(localStorage.getItem("names"));
  
  localStorage.setItem("emails", JSON.stringify(emails));
  emails = JSON.parse(localStorage.getItem("emails"));

  localStorage.setItem("phones", JSON.stringify(phones));
  phones = JSON.parse(localStorage.getItem("phones"));

  }
  
  // alert("2");
  // alert(name);
  // alert(names);

  names.push(name);
  emails.push(email);
  phones.push(phone);
  // alert("6");

  localStorage.setItem('names', JSON.stringify(names));
  localStorage.setItem('emails', JSON.stringify(emails));
  localStorage.setItem('phones', JSON.stringify(phones));
  // alert("7");

  JSON.parse(localStorage.getItem('names'));
  JSON.parse(localStorage.getItem('emails'));
  JSON.parse(localStorage.getItem('phones'));
  // alert("3");
}

function updateInputs () {

  if (typeof(Storage) !== "undefined") {
      // Store
      
      name = document.getElementById("name").value;
      email = document.getElementById("email").value;
      phone = document.getElementById("phone").value;

      updateLocal();

      var len = document.getElementById("phone").value;
      var pLen = len.length;

      var pStr = document.getElementById("phone").value;
      var firstPos = pStr.charAt(0);
      // alert("4");
      if (pLen === 10 && firstPos !== "0" && firstPos !== "1") {

        localStorage.removeItem("name");
        localStorage.setItem("name", name);

        localStorage.removeItem("email");
        localStorage.setItem("email", email);

        localStorage.removeItem("phone");
        localStorage.setItem("phone", phone);
        // alert("5");
        // Retrieve
        document.getElementById("name").innerHTML = localStorage.getItem("name");
        document.getElementById("email").innerHTML = localStorage.getItem("email");
        document.getElementById("phone").innerHTML = localStorage.getItem("phone");

        setTimeout('window.location = "details.html"',500);
        

      } else {
        alert('Enter a 10 digit phone number, without symbols, not beginning with 1 or 0');
      }

  } else {
      document.getElementById("name").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}