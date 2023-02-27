import React from "react";
import app from "./firebase/config";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    doc,
    setDoc,
    deleteDoc,
} from "firebase/firestore";

const App = () => {
    const db = getFirestore(app);

    const createfirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Rahul",
                last: "Sharma",
                born: 1974,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const readallfirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log({ id: doc.id, ...doc.data() });
        });
    };

    const updatefirestore = async () => {
        try {
            const userRef = collection(db, "users");
            await setDoc(doc(userRef, "gtx9L6hnLwsrTVtvLASY"), {
                first: "Rahul",
                last: "Mishra",
                born: 1995,
            });
            console.log("User Updated");
        } catch (error) {
            console.log(error);
        }
    };

    const deletefirestore = async () => {
        const userRef = collection(db, "users");
        const user = doc(userRef, "gtx9L6hnLwsrTVtvLASY");
        await deleteDoc(user);
        console.log("user deleted!");
    };

    return (
        <div className="container mt-5 p-5">
            <button onClick={createfirestore} className="btn btn-success">
                Create User
            </button>
            <button onClick={readallfirestore} className="btn btn-info ms-3">
                Read All User
            </button>
            <button onClick={updatefirestore} className="btn btn-warning ms-3">
                Update User
            </button>
            <button onClick={deletefirestore} className="btn btn-danger ms-3">
                Delete User
            </button>
        </div>
    );
};

export default App;
