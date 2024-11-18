import React, { useRef } from "react";

const Uncontrolled = () => {
  const refInput = useRef();
  console.log("render");
  const submit = (e) => {
    e.preventDefault();

    console.log(refInput.current.value);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input ref={refInput} type="text" placeholder="name" />
        <button>Send</button>
      </form>
  <div>{refInput.current?.value}</div>

    </div>
  );
};

export default Uncontrolled;
