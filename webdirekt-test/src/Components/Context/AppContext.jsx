import {createContext,useState,useEffect  } from 'react';
import axios from 'axios';


export const UserContext = createContext();

export default function AppContextProvider({children}){
const [data, setData] = useState([])
const [sorted, setSorted] = useState([])
const fetchData = ()=>{
    axios.get(`http://localhost:3004/Users`)
      .then((res)=>{
        console.log("res",res.data)
        setData(res.data)
      })
      .catch((e)=>{
        console.log(e)
      })
  }


  const deleteUser = (id)=>{
    console.log('id',id)
    if(window.confirm("Are You Sure")){
    axios.delete(`http://localhost:3004/Users/${id}`)
      .then((res)=>{
        fetchData();
      })
      .catch((e)=>{
        console.log(e)
      })
  }}


  const SortByName=()=>{
    // setFlag(false)
data.sort((a,b)=>{
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        else{
            return 0;
        }
    })
    console.log('sort',data)
}

const SortByAddress1 = ()=>{
    // setFlag(false)

    let filtered = data.sort((a,b)=>{
        if(a.address1 < b.address2){
            return -1;
        }
        if(a.address1 > b.address2){
            return 1;
        }
        else{
            return 0;
        }
    })
    console.log('sorted',data)
}

  useEffect(()=>{
    fetchData();
  },[])
    return(
        <UserContext.Provider value={{data, setData,fetchData,deleteUser,SortByName,SortByAddress1}}>
        {children}
        </UserContext.Provider>
    )
}