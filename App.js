import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpense from "./screens/AllExpense";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";
import { GlabalStyle } from "./constants/styles";
import { Button, Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/reduxStore";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlabalStyle.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlabalStyle.colors.primary500 },
        tabBarActiveTintColor: GlabalStyle.colors.accent500,
        headerRight: () => (
          <Button
            title="Add Expense"
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          ></Button>
        ),
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
        name="RecentExpense"
        component={RecentExpense}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" size={size} color={color} />
          ),
        }}
        name="AllExpense"
        component={AllExpense}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: GlabalStyle.colors.primary500 },
            headerTintColor: "white",
          })}
          initialRouteName="ExpenseOverview"
        >
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation:'modal',
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}
