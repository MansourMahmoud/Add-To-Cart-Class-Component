import React from "react";

const FormattedPrice = ({ amount }) => {
  const formattedAmount = new Number(amount).toLocaleString("ar-EG", {
    style: "currency",
    currency: "EGP",
    currencyDisplay: "symbol", // يقوم بعرض الرمز العملاتي
    minimumFractionDigits: 2,
  });

  // استبدال الرمز الافتراضي ب "ج.م"

  const formattedAmountWithCustomSymbol = formattedAmount.replace("EGP", "ج.م");

  return <span>{formattedAmountWithCustomSymbol}</span>;
};

export default FormattedPrice;
