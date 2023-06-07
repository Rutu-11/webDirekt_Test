import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter,Text,Heading,Button } from "@chakra-ui/react";
export default function UserDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const getUserData = () => {
    axios
      .get(`http://localhost:3004/Users/${id}`)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log("useParams", id);
  return (
    <div className="UserDetails">
      <Card>
        <CardBody>
          <Heading as='h1' size='xl' color="blue.400">Detailed View On User </Heading>
          <Heading as='h3' size='m'>{ "NAME     :"+ data.name}</Heading>
          <Heading as='h3' size='m'>{ "ADDRESS 1     :"+ data.address1}</Heading>
          <Heading as='h3' size='m'>{ "ADDRESS 2    :"+ data.address2}</Heading>
          <Heading as='h3' size='m'>{ "Country      :"+ data.country}</Heading>
          <Button colorScheme='blue'><Link to='/'>Back to Home Page </Link></Button>
          
        </CardBody>
      </Card>
    </div>
  );
}
