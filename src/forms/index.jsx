import React, { useState } from "react";
import FormsItem from "./forms-item";

const Forms = () => {
  console.log("render2");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    let person = {
      id: Date.now(),
      name,
      age,
    };
    setData((p) => [...p, person]);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <br />
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <br />
        <br />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <br />
        <button>Send</button>
      </form>
      <br />
      <br />
      {data.map((value) => (
        <FormsItem key={value.id} value={value} />
      ))}
    </div>
  );
};

export default Forms;
