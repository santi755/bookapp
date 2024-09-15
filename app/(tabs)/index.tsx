import { View, Text } from "react-native";
import { styled } from "nativewind";
import { useContext } from "react";
import { LocaleContext } from "@/plugins/lang/i18nProvider";

const StyledText = styled(Text);

export default function HomeScreen() {
  const { t } = useContext(LocaleContext);

  return (
    <View>
      <StyledText className="text-red-600"> {t("welcome")} </StyledText>
    </View>
  );
}
