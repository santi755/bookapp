import { View, Text } from "react-native";
import { styled } from "nativewind";
import { useTranslation } from "react-i18next";

const StyledText = styled(Text);

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View>
      <StyledText className="text-red-600"> {t("welcome")} </StyledText>
    </View>
  );
}
