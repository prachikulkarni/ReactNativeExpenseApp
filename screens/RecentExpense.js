import { Button, StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSE } from "../data/dummy-data";

function RecentExpense({ navigation }) {
  function handleClick() {
    navigation.navigate("ManageExpense");
  }

  return (
    <View style={styles.outerContainer}>
      <ExpensesOutput
        expenses={EXPENSE}
        periodName={"Last 7 days"}
      ></ExpensesOutput>
    </View>
  );
}

export default RecentExpense;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
