import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux";
import { PortfolioScreen } from "./src/screens/PortfolioScreen/PortfolioScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CurrencyScreen } from "./src/screens/CurrencyScreen/CurrencyScreen";
import {
  SCREEN_NAME_CURRENCY,
  SCREEN_NAME_PORTFOLIO,
} from "./src/constst/screens";
import { Currency } from "./src/types/wallet";

export type RootStackParamList = {
  SCREEN_NAME_PORTFOLIO: undefined;
  SCREEN_NAME_CURRENCY: Currency;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer theme={DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name={SCREEN_NAME_PORTFOLIO}
              component={PortfolioScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name={SCREEN_NAME_CURRENCY}
              component={CurrencyScreen}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
