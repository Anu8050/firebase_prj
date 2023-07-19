import React, { useState } from "react";

function Header() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
    setInput("");
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
              placeholder="What do you need to do today?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </center>
    </>
  );
}

export default Header;