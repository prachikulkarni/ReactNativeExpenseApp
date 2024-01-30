import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && style.pressed}
      onPress={onPress}
    >
      <View style={style.buttonContainer}>
        <Ionicons name={icon} size={size} color={color}></Ionicons>
      </View>
    </Pressable>
  );
}

export default IconButton;

const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
