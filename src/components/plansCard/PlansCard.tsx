import { Image, Text, TouchableOpacity, View } from "react-native";
import { PlansProps } from "../../types/types";
import { styles } from "./styles";

export const PlansCard = ({
  title,
  image,
  description,
  arrow,
  style,
}: PlansProps) => {
  return (
    <TouchableOpacity style={[styles.suggestionCard, style]}>
      <View>
        <Image source={image} style={styles.suggestionImage} />
      </View>
      <View style={styles.textCard}>
        <Text style={styles.title} numberOfLines={1}>
          {title} {arrow && <Text>&#10141;</Text>}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
