import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  editExpenses: (id) => {},
  deleteExpenses: (id, { description, amount, date }) => {},
});



function ExpenseContextProveider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer);

  function addExpense({ expenseData }) {
    dispatch({ kind: "ADD", payload: expenseData });
  }

  function editExpense({ id }) {
    dispatch({ kind: "DELETE", payload: id });
  }

  function addExpense({ id, expenseData }) {
    dispatch({ kind: "UPDATE", payload: { id: id, date: expenseData } });
  }

  return (
    <ExpenseContextProveider.ExpenseContext>
      {children}
    </ExpenseContextProveider.ExpenseContext>
  );
}

export default ExpenseContextProveider;
