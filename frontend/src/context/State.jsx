import { useEffect , useState } from "react";
import StateContext from "./Context";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Get the Firebase authentication instance
const auth = getAuth();


const StateProvider = ({ children }) => {
    
    const [User, setUser] = useState({
        Name : "",
        Email : "",
    })

    const LoginwithGoogle = async () => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("I am running")
                setUser({
                    Name : user?.displayName,
                    Email : user?.email
                })
                sessionStorage.setItem("uid", user.uid);
        
            } else {
                console.log("Internet connection is not available")
            }
            });

    }


    const fetchuser = async (uid) => {

        const res  = await fetch(`https://backend-zeta-seven-80.vercel.app/api/auth/user/${sessionStorage.getItem("uid")}` , {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
            }
        })
        const data = await res.json();
        console.log(data);
        setUser({
            Name : data?.displayName,
            Email : data?.email
        })
    }



    useEffect(() => {
        if(sessionStorage.getItem("uid")){
            fetchuser(sessionStorage.getItem("uid"));
        }
    } , [sessionStorage.getItem("uid")])

    useEffect(() => {
        if(sessionStorage.getItem("token")){
            LoginwithGoogle();
        }
    } , [sessionStorage.getItem("token")])

    return (
        <StateContext.Provider value={{ User, fetchuser , setUser }}>
        {children}
        </StateContext.Provider>
    );
};

export default StateProvider;