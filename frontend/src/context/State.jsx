import { useEffect , useState } from "react";
import StateContext from "./Context";


const StateProvider = ({ children }) => {
    
    const [User, setUser] = useState({
        Name : "",
        Email : "",
    })

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

    return (
        <StateContext.Provider value={{ User, fetchuser , setUser }}>
        {children}
        </StateContext.Provider>
    );
};

export default StateProvider;