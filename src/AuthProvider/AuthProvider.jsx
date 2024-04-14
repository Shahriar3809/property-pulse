import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [loading, setLoading] = useState(true)

  // Create user
    const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User with email and password
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
    }


    // Github Login
    const githubLogin = () => {
      return signInWithPopup(auth, githubProvider);
    }


    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, currentUser=> {
        setUser(currentUser)
        setLoading(false);
      })
      return ()=> {
        unSubscribe()
      }
    },[])



    const logOut = () => {
      return signOut(auth)
    }

    // Auth Info
    const authInfo = {
      createUser,
      setUser,
      user,
      loginUser,
      googleLogin,
      githubLogin,
      logOut,
      loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};






AuthProvider.propTypes = {
  children: PropTypes.node,
}
export default AuthProvider;