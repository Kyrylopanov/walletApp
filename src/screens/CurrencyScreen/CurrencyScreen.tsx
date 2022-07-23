import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { CurrencyItem } from "../../components/CurrencyItem/CurrencyItem";
import { Convert } from "../../../assets/images/Convert";

type RoutProps = RouteProp<RootStackParamList>;
type Props = {
  route: RoutProps;
};
export const CurrencyScreen: React.FC<Props> = (props) => {
  const { route } = props;
  const item = route.params;

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.convert}>
        <Convert />
      </View>
      <ScrollView style={styles.itemContainer}>
        <CurrencyItem item={item} />
      </ScrollView>
    </SafeAreaView>
  );
};
