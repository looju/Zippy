import "react-native-gesture-handler";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import utilities from "./tailwind.json";
import { RootNavigator } from "./Navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://marnate.stepzen.net/api/vetoed-catfish/__graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
