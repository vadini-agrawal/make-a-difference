  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxKqUB6_fZgmxLrnP6RclWpnXDPWY-t8M",
    authDomain: "healthy-friends.firebaseapp.com",
    databaseURL: "https://healthy-friends.firebaseio.com",
    projectId: "healthy-friends",
    storageBucket: "healthy-friends.appspot.com",
    messagingSenderId: "259118374654"
  };
  firebase.initializeApp(config);

    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      // if (email.length < 4) {
      //   alert('Please enter an email address.');
      //   return;
      // }
      // if (password.length < 4) {
      //   alert('Please enter a password.');
      //   return;
      // }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
        firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
        });
      });
    }

function check(form)/*function to check userid & password*/ {
  /*the following code checkes whether the entered userid and password are matching*/
  if(form.userid.value == "foo@email.com" && form.passwrd.value == "password") {
    window.open('landingPage.html');/*opens the target page while Id & password matches*/
  } else {
    alert("Error Password or Username");/*displays error message*/
  }
}


