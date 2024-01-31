import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { GlabalStyle } from "../constants/styles";
import CustomeButtons from "../components/CustomeButtons";
import { useDispatch } from "react-redux";
import { addExpense,deleteExpense, updateExpense } from "../store/ExpenceSlicer";
import { useSelector } from 'react-redux'

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log("inside delete+"+expenseId)
     dispacher(deleteExpense({id:expenseId}))
     navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  const dispacher = useDispatch()
  const currentdata = useSelector((state) => state.expenseManager.expense)
  currentdata.map(item => {console.log("out="+item.id+"   description="+item.description)})
  
  function confirmHandler() {
    if(isEditing){
      console.log("inside update expenseId ="+expenseId)
      dispacher(updateExpense({id:expenseId, description:"updated value",amount:78+1} ))
    }else{
      dispacher(addExpense({description:"test",amount:78} ))
    }
   
    navigation.goBack();
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.button}>
        <CustomeButtons
          style={styles.buttonStyle}
          mode={"flat"}
          onPress={cancelHandler}
        >
          Cancle
        </CustomeButtons>
        <CustomeButtons
          style={styles.buttonStyle}
          mode={"flat"}
          onPress={confirmHandler}
        >
          {isEditing ? "Update" : "Add"}
        </CustomeButtons>
      </View>
      {isEditing && (
        <View style={styles.delete}>
          <IconButton
            icon="trash"
            color={GlabalStyle.colors.error500}
            size={34}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: GlabalStyle.colors.primary800,
  },
  delete: {
    marginTop: 16,
    borderTopWidth: 2,
    paddingTop: 8,
    borderTopColor: GlabalStyle.colors.primary200,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
