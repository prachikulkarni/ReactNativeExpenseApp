import { Pressable, StyleSheet, View , Text} from "react-native";
import { GlabalStyle } from "../constants/styles";

function CustomeButtons({ children, onPress, mode, style }) {
  return (<View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomeButtons;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlabalStyle.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlabalStyle.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlabalStyle.colors.primary100,
    borderRadius: 4,
  },
});
