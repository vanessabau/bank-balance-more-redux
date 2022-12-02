import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DepositPage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const onDepositHandle = () => {
    dispatch({ type: "DEPOSIT", payload: 10 });
  };

  return (
    <div>
      <h1>Deposit</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
};
export default DepositPage;
