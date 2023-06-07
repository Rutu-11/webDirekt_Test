import React,{useState,useEffect,useContext} from "react";
import { Input, background } from "@chakra-ui/react";
import { Select,Heading } from "@chakra-ui/react";
import { UserContext } from "./Context/AppContext";
import axios from 'axios';
function FormComponent() {
  const {data,deleteUser,fetchData}= useContext(UserContext)
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [country, setCountry] = useState("")
  const [userData, setUserData] = useState([])
  const handleSubmit = async(e)=>{
    e.preventDefault();
      let payload = {
        name:name,
        address1:address1,
        address2:address2,
        country:country
      }
      axios.post(`http://localhost:3004/Users`,payload)
      .then((res)=>{
        // console.log(res)
        setName("");
        setAddress1("");
        setAddress2("");
        setCountry("")
        fetchData();
      })
      .catch((e)=>{
        console.log(e)
      })
      
      // console.log(payload)
  }

 
  return (
    <div className="formDiv" onSubmit={handleSubmit}>
      <Heading as='h1' size='xl'>Fill Your Details Here</Heading>
      <form>
        <Input placeholder="Enter Name" required onChange={(e)=>{setName(e.target.value)
        }} />
        <Input placeholder="Enter address1" onChange={(e)=>{setAddress1(e.target.value)
        }}/>
        <Input placeholder="Enter address2"onChange={(e)=>{setAddress2(e.target.value)
        }} />
        {/* <Input placeholder="Enter Name" /> */}
        <Select placeholder="Select option" onChange={(e)=>{setCountry(e.target.value)
        }}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </Select>
        <Input type="submit"  background={'blue.500'} />
      </form>
    </div>
  );
}

export default FormComponent;
