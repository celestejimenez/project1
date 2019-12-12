/* 
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
alert("this may work")
if (typeof(Storage) !== "undefined") {
    function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
      // Store
    localStorage.setItem("email", email);
    // Retrieve
    document.getElementById("email").innerHTML = localStorage.getItem(email);
    alert("this works")
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    return false;
    alert("this doesnt work")
  }
  
  $("#validate").on("click", validate);}
    
    
} else {
    document.getElementById("email").innerHTML = "Sorry, your browser does not support Web Storage...";
    alert("this also doesnt work")
  }

*/

/*
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
        alert("3");
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
        alert("4");
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").on("click", validate);

*/

/*

function emailIsValid () {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }



if (emailIsValid("#email") === true) {
    alert('yes');
} else {
    alert('no');
}

*/

function addRows() {
  
  document.getElementById("name1").innerHTML = localStorage.getItem("name");
  document.getElementById("email1").innerHTML = localStorage.getItem("email");
  document.getElementById("phone1").innerHTML = localStorage.getItem("phone");
  /*
  var table = document.getElementById("cList");
  var row = table.insertRow(0);

  var c2 = row.insertCell(1);
  var c3 = row.insertCell(2);
  var c4 = row.insertCell(3);

  c1.innerHTML = i
  c2.innerHTML = document.writeIn("celeste");
  c3.innerHTML = document.writeIn("celeste@gmail.com");
  c4.innerHTML = document.writeIn("2092048737");

  alert("1");
  */
}

/*

function retrieveInputs () {
    var fullName = document.getElementById('fullName').value;
         localStorage.setItem('fullName', fullName);
         document.getElementById('fullName').innerHTML = fullName;
         var email = document.getElementById('email').value;
         localStorage.setItem('email', email);
         document.getElementById('email').innerHTML = email;
         var phone = document.getElementById('phone').value;
         localStorage.setItem('phone', phone);
         document.getElementById('phone').innerHTML = phone;


}

function getInput() {
    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
  
        // Save the name in localStorage.
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);

      });
  
    }
}

function takeInput() {
    alert(1);
    const name = document.getElementById('name').innerHTML;
    const email = document.getElementById('email').innerHTML;
    const phone = document.getElementById('phone').innerHTML;
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    
}


*/

function saveInputs () {
  if (typeof(Storage) !== "undefined") {
      // Store
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      // Retrieve
      document.getElementById("name").innerHTML = localStorage.getItem("name");
      document.getElementById("email").innerHTML = localStorage.getItem("email");
      document.getElementById("phone").innerHTML = localStorage.getItem("phone");
      
      setTimeout('window.location = "details.html"',10);
      
    } else {
      document.getElementById("name").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


function saveArr () {
  // alert("4");
  // var exNames = JSON.parse(localStorage.getItem("allNames"));

  // if (exNames == null) exNames = [];
  // alert("9");
  // alert(name);
  // const name = document.getElementsById("name").value;
  // const name = localStorage.getItem("name").value;
  // alert("test");
  // alert(name);
  
  // var names = [name];
  
  
  //localStorage.setItem("names", JSON.stringify(names));
  // exNames.push(names);
  //alert("8");
  // localStorage.setItem("allNames", JSON.stringify(exNames));

  alert("7");
  var namex = document.getElementById("name").value;
  names.push("testing123");
  names.push(namex);
  
  names = JSON.parse(localStorage.getItem("names"));
  localStorage.setItem("names", JSON.stringify(names));
  JSON.parse(localStorage.getItem("names"));
  alert("congrats");
}