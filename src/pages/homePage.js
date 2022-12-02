import React from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector(state =>state.loanReducer.loan);
  const dispatch = useDispatch();

  const applyLoanHandle=()=>{
      dispatch({type:"APPLY"})
  }

  return (
    <div>
      <h1>Home Page</h1>
        <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
      <h2>Balance is {balance}</h2>
        <button disabled={loan ? true : false} onClick={applyLoanHandle}>{loan ? "Loan Applied" : "Apply for Loan"}</button>
    </div>
  );
};

export default HomePage;
