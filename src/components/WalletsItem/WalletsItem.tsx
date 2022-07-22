import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Banker } from "../../../assets/images/Banker";
import { Ether } from "../../../assets/images/Ether";
import { PaxDollar } from "../../../assets/images/PaxDollar";
import { UsDollar } from "../../../assets/images/UsDollar";

import { CurrencyItem } from "../../types/githubIssues";
import { styles } from "./style";

interface Props {
  item: CurrencyItem;
  isFirstElement: boolean;
  isLastElement: boolean;
}

export const WalletsItem: React.FC<Props> = (props) => {
  const { item, isFirstElement, isLastElement } = props;

  const mapIdToImage: Record<number, JSX.Element> = {
    1: <UsDollar />,
    2: <Ether />,
    3: <PaxDollar />,
    4: <Banker />,
  };

  const goToDetails = () => {
    // props.navigation.push('IssueDetails', { issue });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={goToDetails}
      style={[
        styles.card,
        !isLastElement && styles.borderBottom,
        isFirstElement && styles.borderRadiusTop,
        isLastElement && styles.borderRadiusBottom,
      ]}
    >
      <View style={styles.leftContainer}>{mapIdToImage[item.id]}</View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.cryptoValue}>{item.cryptoValue}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};
