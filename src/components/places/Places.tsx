import { Text, View } from "react-native";
import { PlaceProps } from "../../types/types";
import { styles } from "./styles";

export const Places = ({ title, adress }: PlaceProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeTitle}>{title}</Text>
      <Text style={styles.placeAddress}>{adress}</Text>
    </View>
  );
};
