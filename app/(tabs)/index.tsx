import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { Paragraph } from "@/components/atoms/text/paragraph";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View>
      <Paragraph className="text-red-600"> {t("welcome")} !! </Paragraph>
    </View>
  );
}
