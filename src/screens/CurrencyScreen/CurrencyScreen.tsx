import React, { useLayoutEffect } from "react";
import {  SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./style";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { CurrencyItem } from "../../components/CurrencyItem/CurrencyItem";
import { Convert } from "../../../assets/images/Convert";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton/BackButton";

type RoutProps = RouteProp<RootStackParamList>;
type Props = {
  route: RoutProps;
};
export const CurrencyScreen: React.FC<Props> = (props) => {
  const { route } = props;
  const item = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item?.name,
      headerTitleStyle: {
        color: "#102D6F",
        fontSize: 18,
        texAllign: 'center'
      },
      headerTitleAlign: 'center',
      headerLeft: () => <BackButton />,
    });
  }, []);

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
