import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

export default function Insert() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const addDataToFirestore = async (formData) => {
    try {
      const firestore = firebase.firestore();
      const collectionRef = firestore.collection('your-collection');

      await collectionRef.add(formData);
      console.log('Data added successfully!');
    } catch (error) {
      console.error('Error adding data: ', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      address: address
    };
    addDataToFirestore(formData);
  };

  return (
    <>
      <center>
        <form onSubmit={handleSubmit}>
          <h1 className="title" style={{ color: "green" }}>
            My Todos
          </h1>
          <div className="input">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </center>
    </>
  );
}


