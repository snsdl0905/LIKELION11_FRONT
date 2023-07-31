import { useState } from "react";
import styled from "styled-components";
import Detail from "./Detail";

const Box = styled.div`
  border: 1px solid grey;
  padding: 10px;
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PhoneList({list}) {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      {list.map((contact) => (
        <Box onClick={() => handleContactClick(contact)}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </Box>
      ))}
      {selectedContact && (
        <PopupBackground>
            <Detail
                image={selectedContact.image}
                name={selectedContact.name}
                number={selectedContact.number}
                address={selectedContact.address}
                onClose={()=>setSelectedContact(null)}
            />
        </PopupBackground>
      )}
    </div>
  );
}

export default PhoneList;