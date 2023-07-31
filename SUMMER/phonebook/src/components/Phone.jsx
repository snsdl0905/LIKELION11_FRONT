import React, { useState } from "react";
import PhoneList from "./PhoneList";
import Add from "./Add";

const Phone = () => {
  const [list, setList] = useState([
    { name: "lee", number: "01000000000", address: "Seoul", image: "L.png" },
    { name: "kim", number: "01011111111", address: "Incheon", image: "K.png" },
    { name: "park", number: "01022222222", address: "Busan", image: "P.png" },
  ]);

  return (
    <>
        <Add list={list} setList={setList} />
        <PhoneList list={list} setList={setList} />
    </>
  );
};

export default Phone;