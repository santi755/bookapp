import { Stack } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";

export default function NotFoundScreen() {
  const StyledText = styled(Text);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <StyledText className="text-green-600">
        This page doesn't exist.
      </StyledText>
    </>
  );
}
