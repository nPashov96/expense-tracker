import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {Object.keys(transactions).length > 0 ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <li className="empty">No records</li>
        )}
      </ul>
    </>
  );
};

export default TransactionList;
