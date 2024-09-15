import { View, Text } from "react-native";
import { styled } from "nativewind";

const StyledText = styled(Text);

export default function HomeScreen() {
  return (
    <View>
      <StyledText className="text-blue-500">profile page...</StyledText>
      <StyledText className="text-blue-500">Otro texto!...</StyledText>
    </View>
  );
}
