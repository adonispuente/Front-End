import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import ValueList from "./ValueList";
import CardComponent from "./CardComponents";

//I will return the two parts of the application here
function Essentialism() {
  const [value, setValue] = useState([]);

  //dummy axios url
  const url = "https://dog.ceo/api/breed/hound/images";
  const getValues = () => {
    //eventuall I have to get the endpoint and get the values from there
    // axiosWithAuth()
    // .get("instert Endpoint here")
    // .then((res)=>{
    //     most likely going to be res.data
    //     console.log(res)
    //     setValue(res.data)
    // })
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setValue(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getValues();
  }, []);

  return (
    <div>
      Actuall App
      {/* {value.map((item) => (
        <p> {item} </p>
      ))} */}
      <ValueList />
      <CardComponent />
    </div>
  );
}

export default Essentialism;
