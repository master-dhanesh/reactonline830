import { useState } from "react";
import app from "./firebase/config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { useEffect } from "react";
const App = () => {
    const auth = getAuth(app);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const currentsignedIn = async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    };

    useEffect(() => {
        currentsignedIn();
    }, []);

    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                "eva@lovelance.com",
                "123456"
            );
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };
    const signin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                "eva@lovelance.com",
                "123456"
            );
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };
    const signout = async () => {
        await signOut(auth);
        setIsLoggedIn(false);
    };

    return (
        <div className="container mt-5 p-5">
            <h3>{isLoggedIn ? "User Logged In" : "User Logged Out"}</h3>
            <button onClick={signup} className="btn btn-success ms-3">
                Signup
            </button>
            <button onClick={signin} className="btn btn-dark ms-3">
                Signin
            </button>
            <button onClick={signout} className="btn btn-danger ms-3">
                Signout
            </button>
        </div>
    );
};

export default App;
