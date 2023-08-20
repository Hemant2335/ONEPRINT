

API_URL


export const fetchdata = async(endpoint)=>{
    const options = {
        method : 'Get',
        headers : {
            Authorization : "Bearer " + API_TOKEN
        }
    };

    const url = `${API_URL}${endpoint}`;
    const data = await fetch(url,options);
    const parseddata = await data.json();
    return parseddata; 

}