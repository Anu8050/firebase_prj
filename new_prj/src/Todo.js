import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from './Firebase'; 

const Todo = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [address, setAddress] = useState('');

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'Student'), {
        Name: name,
        Age:age,
        Branch:branch,
        Phone:phone,
        Address:address
      });
      console.log('Document written with ID: ', docRef.id);
      setName('');
      setAddress('');
      setAge('');
      setBranch('');
      setPhone(''); 
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Student'));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTodos(newData);
      console.log(newData);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>
        <div>
          <div>
            <input type="text" placeholder="Name" value={name}
              onChange={(e) => setName(e.target.value)}
            /><br/>
            <input type="text" placeholder="Age" value={age}
              onChange={(e) => setAge(e.target.value)}
            /><br/>
            <input type="text" placeholder="Branch" value={branch}
              onChange={(e) => setBranch(e.target.value)}
            /><br/>
            <input type="text" placeholder="Phone" value={phone}
              onChange={(e) => setPhone(e.target.value)}
            /><br/>
            <input type="text" placeholder="Address" value={address}
              onChange={(e) => setAddress(e.target.value)}
            /><br/>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>
        
        <div className="todo-content">
            <ul>
                {todos?.map((data, i) => (
                <li key={i}>
                    <p>Name: {data.Name}</p>
                    <p>Age: {data.Age}</p>
                    <p>Branch: {data.Branch}</p>
                    <p>Phone: {data.Phone}</p>
                    <p>Address: {data.Address}</p>
                </li>
                ))}
            </ul>
        </div>

        
      </div>
    </section>
  );
};

export default Todo;

// <div className="todo-content">
//     {todos?.map((name, i) => (
//     <p key={i}>{name.name}</p>
//     ))}
// </div>
