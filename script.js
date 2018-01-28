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
      var name = document.getElementById('name').value;
      var password = document.getElementById('password').value;
      var usersEmails = firebase.database().ref('user').orderByChild('email');
      // for () {
      //   if (email == userEmail) {
      //     alert('This email has already been used.');
      //     return;
      //   }

      // }
      // if (password.length < 4) {
      //   alert('Please enter a password.');
      //   return;
      // }
      // Sign in with email and pass.
      // [START createwithemail]
      var okay = true;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data) {
        console.log("there was not an error");
        var friendsList = {};
        if (okay) {
          writeUserData(email, name, password, friendsList);
          alert("NEXT PAGE");
          handleSignIn(email, password);
        }
      }).catch(function(error) {
        console.log('firebase shit is happening');
        // Handle Errors here.
        okay = false;
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        return false;
        }
      });
      console.log(email);
      console.log(password);

      ////
      // firebase.database().ref('user').on('value', function(snapshot) {
      //   var snapshotMap = snapshot.val();
      //   for (var i = 0; i < snapshotMap.length; i++) {
      //     console.log(snapshotMap[i].email);
      //   }
      // });
      var userId = firebase.auth().currentUser.id;
      return firebase.database().ref().once('value').then(function(snapshot) {
        const users = snapshot.val().user;
        for (var id in users) {
          console.log(users[id].email);
        }
      });
    }


function handleSignIn(email, password) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(data) {
    console.log("I logged in");
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    return;
    // ...
  });

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'landingPage.html';
    } else {
      alert('Failed sign in. Try again');
    }
  });
}



function check(form)/*function to check userid & password*/ {
  /*the following code checkes whether the entered userid and password are matching*/
  if(form.userid.value != "" && form.passwrd.value != "") {
    window.open('landingPage.html');/*opens the target page while Id & password matches*/
  } else {
    alert("Error Password or Username");/*displays error message*/
  }
}
function writeUserData(email, name, password, friendsList) {
  firebase.database().ref('user').push({
    "email": email,
    "name": name,
    "password": password,
    "friendsList": friendsList,
  });
}

// additional collapse events js
$(document).ready(function(){
  $('.collapsible').collapsible();

});
