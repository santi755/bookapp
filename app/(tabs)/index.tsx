import { useTranslation } from "react-i18next";
import ViewContainer from "@/components/layout/ViewContainer";

import { Text } from "@/components/atoms/text/Text";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ViewContainer>
      <Text className="text-green-600"> {t("welcome")} ! </Text>
    </ViewContainer>
  );
}
