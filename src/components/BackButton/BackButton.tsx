import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowBack } from "../../../assets/images/ArrowBack";
import { styles } from "./style";

export const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.main} onPress={navigation.goBack}>
      <ArrowBack />
    </TouchableOpacity>
  );
};
