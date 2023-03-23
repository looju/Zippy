import "react-native-gesture-handler";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import { RootNavigator } from "./Navigator/RootNavigator";


export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
       <RootNavigator/>
      </NavigationContainer>
    </TailwindProvider>
  );
}

