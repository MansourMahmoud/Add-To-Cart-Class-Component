import React from "react";

const FormattedNumbers = ({ number }) => {
  const formattedNumber = new Number(number).toLocaleString("ar-EG");

  return <span>{formattedNumber}</span>;
};

export default FormattedNumbers;
