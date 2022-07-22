import { View, Text } from "react-native";
import { styles } from "./style";
import * as React from "react";
import { UsDollar } from "../../../assets/images/UsDollar";

type Props = {
  totalAmount: string;
};

const Total: React.FC<Props> = (props) => {
  const { totalAmount } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Total</Text>
      <View style={styles.bottomContainer}>
        <UsDollar />
        <Text style={styles.amountText}>{totalAmount} USD</Text>
      </View>
    </View>
  );
};

export default Total;
