
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyDxKqUB6_fZgmxLrnP6RclWpnXDPWY-t8M",
    authDomain: "healthy-friends.firebaseapp.com",
    databaseURL: "https://healthy-friends.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "259118374654",
  };
  firebase.initializeApp(config);


function check(form)/*function to check userid & password*/
  {
  /*the following code checkes whether the entered userid and password are matching*/
  if(form.userid.value == "foo@email.com" && form.pswrd.value == "password") {
    window.open('landingPage.html')/*opens the target page while Id & password matches*/
  } else {
    alert("Error Password or Username")/*displays error message*/
  }
}