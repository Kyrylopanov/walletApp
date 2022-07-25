import { View, Text } from "react-native";
import { styles } from "./style";
import * as React from "react";
import { UsDollar } from "../../../assets/images/UsDollar";
import { Amount } from "../../types/wallet";

type Props = {
  amount: Amount;
};

const Total: React.FC<Props> = (props) => {
  const { amount } = props;
  const { beforeDecimals, afterDecimals } = amount;

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Total</Text>
      <View style={styles.bottomContainer}>
        <UsDollar />
        <Text style={styles.amount}>
          {beforeDecimals}
          {afterDecimals && (
            <Text style={styles.afterDecimals}>.{afterDecimals}</Text>
          )}
          <Text style={styles.afterDecimals}> USD</Text>
        </Text>
      </View>
    </View>
  );
};

export default Total;
