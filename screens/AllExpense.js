import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSE } from "../data/dummy-data";
import { useSelector } from "react-redux";

function AllExpense() {

  const currentdata =  useSelector((state) => state.expenseManager.expense)
  return (
    <ExpensesOutput
      styles={styles.outerContainer}
      expenses={currentdata}
      periodName={"Total"}
    ></ExpensesOutput>
  );
}

export default AllExpense;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
