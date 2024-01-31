import { createSlice } from "@reduxjs/toolkit";
import { EXPENSE } from "../data/dummy-data";
import uuid from "react-native-uuid";

const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expense: [
      { id: "e1", description: "Shopping", amount: 59.99 },
      { id: "e2", description: "Book", amount: 99 },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      return {
        ...state,
        expense: [
          ...state.expense,
          {
            id: uuid.v4(),
            description: action.payload.description,
            amount: action.payload.amount,
          },
        ],
      };
    },
    deleteExpense: (state, action) => {
      console.log("deletion id=" + action.payload.id);
      state.expense.map((item) => {
        console.log(
          "inside reducer=" + item.id + "   description=" + item.description
        );
      });
      const deleteIndex = state.expense.findIndex(
        (expense) => expense.id === action.payload.id
      );
      console.log("deletion index=" + deleteIndex);
      state.expense.splice(deleteIndex, 1);
    },
    updateExpense: (state, action) => {
      console.log("update id in slicer=" + action.payload.id);
      const updateIdIndex = state.expense.findIndex(
        (expense) => expense.id === action.payload.id
      );
      console.log("updateIdIndex index=" + updateIdIndex);
      state.expense[updateIdIndex] = {
        ...state.expense[updateIdIndex],
        description: action.payload.description,
        amount: action.payload.amount,
      };
    },
  },
});

export default ExpenseSlice.reducer;
export const addExpense = ExpenseSlice.actions.addExpense;
export const deleteExpense = ExpenseSlice.actions.deleteExpense;
export const updateExpense = ExpenseSlice.actions.updateExpense;
