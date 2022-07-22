import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux";
import { PortfolioScreen } from "./src/screens/PortfolioScreen/PortfolioScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <StatusBar style="dark" />
        <PortfolioScreen />
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
