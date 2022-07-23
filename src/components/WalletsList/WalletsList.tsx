import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import { WalletItem } from "../../types/wallet";
import { WalletsItem } from "../WalletsItem/WalletsItem";

type Props = {
  currencyList: WalletItem[];
};

export const WalletsList: React.FC<Props> = (props) => {
  const { currencyList } = props;

  return (
    <View style={styles.main}>
      <Text style={styles.textHeader}>Wallets</Text>
      <FlatList
        data={currencyList}
        keyExtractor={(item) => item.id + ""}
        style={styles.list}
        renderItem={({ item, index }) => (
          <WalletsItem
            item={item}
            isFirstElement={index === 0}
            isLastElement={index === currencyList.length - 1}
          />
        )}
      />
    </View>
  );
};
