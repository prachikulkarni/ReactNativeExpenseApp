import { FlatList, StyleSheet, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";

function renderMealItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

export default ExpensesList;

const styles = StyleSheet.create({});
