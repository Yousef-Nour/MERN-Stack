import React from "react";

const Variable = ({ variable, color, backgroundColor }) => {
  return (
    <div>
      <h3 style={{ color, backgroundColor }}>
        {isNaN(variable)
          ? `The word is: ${variable}`
          : `The Number is: ${variable}`}
      </h3>
    </div>
  );
};

export default Variable;
