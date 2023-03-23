import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import CustomerScreens from "./Screens/CustomerScreens";

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomerScreens />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
