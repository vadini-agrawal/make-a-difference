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
          handleSignIn(email, password);
        }
      }).catch(function(error) {
        console.log('firebase shit is happening');
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
      }).then(function(data) {
        console.log("there was not an error");
        var friendsList = {};
        writeUserData(email, name, password, friendsList);
        handleSignIn(email, password);
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

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password).then(function(data) {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log(user.email);
          window.location = 'landingPage.html';
        }
      });
      console.log("I logged in");
      }).catch(function(error) {
        // Handle Errors here.
        alert("Failed sign in. Try again");
        var errorCode = error.code;
        var errorMessage = error.message;
        return;
      // ...
      });
    })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function addEvent(eventName, eventDescription, startTime, endTime) {
  var eventName = document.getElementById('eventName').value;
  var eventDescription = document.getElementById('eventDescription').value;
  var startTime = document.getElementById('startTime').value;
  var endTime = document.getElementById('endTime').value;
  writeEventData(eventName, eventDescription, startTime, endTime);

}

function handleSignOut() {
  window.close();
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
<<<<<<< HEAD

// additional collapse events js
$(document).ready(function(){
  $('.collapsible').collapsible();

});
=======
function writeEventData(eventName, eventDescription, startTime, endTime) {
  firebase.database().ref('user').push({
    "eventName": eventName,
    "eventDescription": eventDescription,
    "startTime": startTime,
    "endTime": endTime,
  });
}
>>>>>>> afe3cbb9422e26f7caba1582d99fbd263d1ee26d
