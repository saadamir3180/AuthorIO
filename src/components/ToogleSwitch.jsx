import React from "react";
// import "../styles/ToogleSwitch.css";
import "../styles/Toggle.css";

const ToogleSwitch = ({ formType, setFormType }) => {
  const handleToggle = () => {
    setFormType(formType === "signup" ? "login" : "signup");
  };
  return (
    <div className="button r" id="button-2">
      {/* <input type="checkbox" className="checkbox" onChange={handleToggle} />
      <div className="knobs"></div>
      <div className="layer"></div> */}

    </div>
  );
};

export default ToogleSwitch;
