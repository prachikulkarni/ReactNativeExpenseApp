import { StyleSheet, View, Text, Pressable } from "react-native";
import { GlabalStyle } from "../constants/styles";
import { getFormattedDate } from "../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && style.pressedStye}
    >
      <View style={style.container}>
        <Text style={style.descriptionStyle}>{description}</Text>
        <Text style={style.amountStyle}>${Number(amount).toFixed(2)}</Text>
        {/* <Text style={style.dateStyle}>Date is:{getFormattedDate(date)}</Text> */}
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const style = StyleSheet.create({
  pressedStye: {
    opacity: 0.75,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: GlabalStyle.colors.accent500,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignContent: "space-between",
    alignItems: "center",
  },
  descriptionStyle: {
    color: "black",
  },
  amountStyle: {
    marginEnd:10,
    position: 'absolute',
     right:0,
    color: "black",
    fontSize: 19,
  },
  dateStyle: {
    color: "black",
    fontSize: 13,
  },
});
