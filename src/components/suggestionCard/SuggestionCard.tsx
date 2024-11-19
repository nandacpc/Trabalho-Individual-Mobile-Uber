import { Image, Text, TouchableOpacity, View } from "react-native";
import { PlansProps } from "../../types/types";
import { styles } from "./styles";

export const SuggestionCard = ({
  title,
  image,
  description,
  arrow,
  style,
}: PlansProps) => {
  return (
    <TouchableOpacity style={[styles.suggestionCard, style]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description} {arrow && <Text>&#10141;</Text>}
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={image}
          style={styles.suggestionImage}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};
