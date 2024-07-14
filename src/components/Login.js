import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BGIMAGE_URL, PHOTO_URL, USER_AVTAR } from "../utils/constants";
import ErrorModal from "./ErrorModal";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState([]);
  const [conditions, setConditions] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handelButtonClick = () => {
    const result = checkValidData(email.current.value, password.current.value, name.current ? name.current.value : null);
    if (!result.valid) {
      setErrorMessages([result.message]);
      setConditions(result.conditions);
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessages([error.message]);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages([`${errorCode} - ${errorMessage}`]);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages([`${errorCode} - ${errorMessage}`]);
        });
    }
  };

  const closeModal = () => {
    setErrorMessages([]);
    setConditions({});
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen md:h-full object-cover" src={BGIMAGE_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handelButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Login Now"}
        </p>
      </form>
      <ErrorModal show={errorMessages.length > 0} onClose={closeModal} messages={errorMessages} conditions={conditions} />
    </div>
  );
};

export default Login;
