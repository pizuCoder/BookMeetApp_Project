import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";
import firebase from "../../firebase-config";

const signup = () => {
  var fullName = document.getElementById("signupinput-1").value;
  var orgName = document.getElementById("signupinput-2").value;
  var email = document.getElementById("signupinput-3").value;
  var password = document.getElementById("exampleFormControlInput1").value;
  
  const auth = getAuth(firebase);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signup successful");
      // Redirect to another page or display a success message
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Signup error:", errorMessage);
      // Display an error message to the user
    });
};

export default signup;
