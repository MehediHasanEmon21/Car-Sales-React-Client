
import initializeAuthentication from "../config/Firebase/firebase.init";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();

const useFireBase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    //sign un email

    const signInEmail = (email, password,history) => {

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            history.push('/home')
        })
        .catch((error) => {
            alert(error.message)
        });

    }

    //register with email
    const registerInEmail = (email, password,history) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            history.push('/home')
        })
        .catch((error) => {
            alert(error.message)
        });

    }
   

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({})
        }
        setIsLoading(false);
    });
        return () => unsubscribed;
    }, [])

    const logOut = (history) => {
        setIsLoading(true);
        signOut(auth)
         .then(() => {
            setUser({});
            history.push('/login');
         })
         .finally(() => setIsLoading(false));
            
    }


    return {
        user,
        logOut,
        setUser,
        registerInEmail,
        signInEmail,
        isLoading
    }

}

export default useFireBase;