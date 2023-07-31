import { useState } from "react"

export default function Add({list, setList}){
    const [ inputName, setInputName ] = useState("");
    const [ inputNum, setInputNum ] = useState("");
    const [ inputAddr, setInputAddr ] = useState("");

    const saveInputName = (e) => {
        setInputName(e.target.value);
    }
    const saveInputNum = (e) => {
        setInputNum(e.target.value);
    }
    const saveInputAddr = (e) => {
        setInputAddr(e.target.value);
    }

    const addPhone = () => {
        let newList = [
          ...list,
          { name: inputName, number: inputNum, address: inputAddr },
        ];
        setList(newList);
        setInputName("");
        setInputNum("");
        setInputAddr("");
      };

    return (
        <>
            <input type="text" placeholder="name" value={inputName} onChange={saveInputName}/>
            <input type="text" placeholder="number" value={inputNum} onChange={saveInputNum}/>
            <input type="text" placeholder="address" value={inputAddr} onChange={saveInputAddr}/>
            <button onClick={addPhone}>추가</button>
        </>
    )
}