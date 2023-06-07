import React,{useContext,useState,useEffect} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Button,
    Flex
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
import { UserContext } from './Context/AppContext'

function TableContainerComp() {

    const {data,deleteUser,SortByName,SortByAddress1}= useContext(UserContext)
    // console.log('SortByName',SortByName)
const [userData, setUserData] = useState(data)

const [flag, setFlag] = useState(false);
let sortedData = [...data]

   


   
    useEffect(()=>{
       
            setUserData(data);
            console.log('sort',userData)
        
    },[SortByName,SortByAddress1])
  return (
    <div className="TableDiv">
        <Flex className="SortDiv" justifyContent={'space-around'} >
        <Button colorScheme='blue' onClick={()=>{SortByAddress1()}} >Sort By Address 1</Button>
        <Button colorScheme='blue' onClick={()=>{SortByName()}} >Sort By Name</Button>
        </Flex>
         <Heading as='h1' size='xl'>User Details</Heading>
    <TableContainer >
    <Table variant='simple'>
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
          <Th>Sr.Number</Th>
          <Th>Name</Th>
          <Th >Address1</Th>
          <Th >Country</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          userData.length>0 &&  userData.map((ele,ind)=>{
              return ( <Tr key={ele.id} style={{ background: ele.country == "India"?"green":"#fff"}} >
                    <Td>{ind+1}</Td>
                <Td>{ele.name}</Td>
                <Td>{ele.address1}</Td>
                <Td >{ele.country}</Td>
                <Td><Link to={`userdetails/${ele.id}`} >SELECT</Link> </Td>
                {/* <Td> <Button colorScheme='blue'>SELECT</Button></Td> */}
                <Td><Button colorScheme='blue' onClick={()=>{deleteUser(ele.id)}}>DELETE</Button></Td>
                </Tr>)
            })
        }
        
      </Tbody>
    
    </Table>
  </TableContainer>
  </div>
  )
}

export default TableContainerComp
