import React from "react";
import { useSelector, useDispatch } from "react-redux";

const WithdrawPage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const onWithdrawHandle = () => {
    dispatch({ type: "WITHDRAW", payload: 10 });
  };

  return (
    <div>
      <h1>Withdraw</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={onWithdrawHandle}>Withdraw</button>
    </div>
  );
};
export default WithdrawPage;
