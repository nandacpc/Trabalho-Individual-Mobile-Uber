import { Image, Text, TouchableOpacity, View } from "react-native";
import { SuggestionProps } from "../../types/types";
import { styles } from "./styles";

export const SuggestionIcon = ({ title, image }: SuggestionProps) => {
  return (
    <TouchableOpacity style={styles.suggestionCard}>
      <View style={styles.imgContainer}>
        <Image
          source={image}
          style={styles.suggestionImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
