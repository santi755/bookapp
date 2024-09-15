import { View, Text } from "react-native";
import { styled } from "nativewind";

const StyledText = styled(Text);

export default function HomeScreen() {
  return (
    <View>
      <StyledText className="text-red-600">Index page!</StyledText>
    </View>
  );
}
