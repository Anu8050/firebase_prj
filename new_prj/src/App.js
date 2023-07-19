import React, { useRef } from "react";
// import Insert from './Component/Insert'
// import { v4 as uuid } from 'uuid/';
// import  * as firebaseService  from './Component/Firebase';
import handleSubmit from './handlesubmit';

function App() {
  const dataRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        name: <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;