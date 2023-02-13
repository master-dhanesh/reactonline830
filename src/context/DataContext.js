import { useState } from "react";
import { createContext } from "react";

export const ProfileContext = createContext(null);

const DataContext = (props) => {
    const [profile, setProfile] = useState([
        { _id: "jf94fd", username: "durgesh_the_devil" },
        { _id: "94ufs", username: "souvik_the_gangester" },
        { _id: "hje84jf", username: "sweetboi_chanchal" },
    ]);

    return (
        <ProfileContext.Provider value={[profile, setProfile]}>
            {props.children}
        </ProfileContext.Provider>
    );
};

export default DataContext;
