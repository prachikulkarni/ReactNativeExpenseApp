import { Button, StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

import { useSelector } from "react-redux";

function RecentExpense({ navigation }) {
  const currentdata =  useSelector((state) => state.expenseManager.expense)
  
  function handleClick() {
    navigation.navigate("ManageExpense");
  }

  return (
    <View style={styles.outerContainer}>
      <ExpensesOutput
        expenses={currentdata}
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
