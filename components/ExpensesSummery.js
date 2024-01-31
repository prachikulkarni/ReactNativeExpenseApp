import { Text, StyleSheet, View } from "react-native";
import { GlabalStyle } from "../constants/styles";

function ExpensesSummery({ periodName, expenses }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${Number(expenseSum).toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummery;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 8,
    backgroundColor: GlabalStyle.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    margin:5,
    color: GlabalStyle.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlabalStyle.colors.primary500,
  },
});
