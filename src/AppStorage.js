import React from "react";
import app from "./firebase/config";
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from "firebase/storage";
const App = () => {
    const storage = getStorage(app);

    const createstorage = async (e) => {
        try {
            const file = e.target.files[0];
            const storageRef = ref(storage, file.name);
            await uploadBytes(storageRef, file);
            const downloadurl = await getDownloadURL(storageRef);
            console.log(downloadurl);
        } catch (error) {
            console.log(error);
        }
    };

    const readstorage = async () => {
        try {
            const storageRef = ref(storage, "model9.jpg");
            const downloadurl = await getDownloadURL(storageRef);
            console.log(downloadurl);
        } catch (error) {
            console.log(error);
        }
    };

    const updatestorage = async () => {};

    const deletestorage = async () => {
        const storageRef = ref(storage, "model6.jpg");
        await deleteObject(storageRef);
        console.log("image deleted!");
    };

    return (
        <div className="container mt-5 p-5">
            <input
                type="file"
                onChange={createstorage}
                className="mb-3 w-50 form-control"
            />

            <button onClick={readstorage} className="btn btn-info ms-3">
                Read All Image
            </button>
            <button onClick={updatestorage} className="btn btn-warning ms-3">
                Update Image
            </button>
            <button onClick={deletestorage} className="btn btn-danger ms-3">
                Delete Image
            </button>
        </div>
    );
};

export default App;
