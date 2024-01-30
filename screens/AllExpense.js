import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSE } from "../data/dummy-data";

function AllExpense() {
  return (
    <ExpensesOutput
      styles={styles.outerContainer}
      expenses={EXPENSE}
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
