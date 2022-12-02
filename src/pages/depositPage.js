import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DepositPage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
    const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();
  const onDepositHandle = () => {
    dispatch({ type: "DEPOSIT", payload: 10 });
  };

  return (
    <div>
      <h1>Deposit</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={onDepositHandle}>Deposit</button>
        <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
    </div>
  );
};
export default DepositPage;
