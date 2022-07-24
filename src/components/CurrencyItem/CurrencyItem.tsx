import React from "react";
import { View, Text, TextInput } from "react-native";
import { Banker } from "../../../assets/images/Banker";
import { Bitcoin } from "../../../assets/images/Bitcoin";
import { Ether } from "../../../assets/images/Ether";
import { Group } from "../../../assets/images/Group";
import { PaxDollar } from "../../../assets/images/PaxDollar";
import { UsDollar } from "../../../assets/images/UsDollar";
import { WalletItem } from "../../types/wallet";
import usePresenter from "./hooks/usePresenter";
import { styles } from "./style";

interface Props {
  item: WalletItem | undefined;
}

export const CurrencyItem: React.FC<Props> = (props) => {
  const { item } = props;
  const { onChangeAmountPay, amountPay, receiveAmount } = usePresenter(item);

  const mapCurrencyToIcon: Record<string, JSX.Element> = {
    BTC: <Bitcoin width={"20px"} height={"20px"} />,
    ETH: <Ether width={"20px"} height={"20px"} />,
    USDP: <PaxDollar width={"20px"} height={"20px"} />,
    BNK: <Banker width={"20px"} height={"20px"} />,
  };

  return (
    <View style={styles.main}>
      <>
        <Text style={styles.textLabel}>Pay amount</Text>
        <View style={styles.inputContainer}>
          {item && (
            <View style={styles.inputLeftContainer}>
              <View style={styles.imageCurrency}>
                {mapCurrencyToIcon[item.currencyFrom]}
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeAmountPay}
                value={amountPay}
                placeholder="Enter amount to convert"
                keyboardType="numeric"
              />
            </View>
          )}
          <Text style={styles.currencyText}>{item?.currencyFrom}</Text>
        </View>
      </>
      <View style={styles.group}>
        <Group />
      </View>
      <>
        <Text style={styles.textLabel}>Receive amount</Text>
        <View style={[styles.inputContainer, styles.inputBorderRight]}>
          {item && (
            <View style={styles.inputLeftContainer}>
              <View style={styles.imageCurrency}>
                <UsDollar width={"20px"} height={"20px"} />
              </View>
              <TextInput
                style={styles.input}
                value={`${receiveAmount}`}
                placeholder="Enter amount to convert"
                keyboardType="numeric"
                editable={false}
              />
            </View>
          )}
          <Text style={styles.currencyText}>USD</Text>
        </View>
      </>
    </View>
  );
};
