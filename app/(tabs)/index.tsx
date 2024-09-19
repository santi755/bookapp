import { useTranslation } from "react-i18next";
import ViewContainer from "@/components/layout/ViewContainer";

import { Paragraph } from "@/components/atoms/text/paragraph";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ViewContainer>
      <Paragraph className="text-green-600"> {t("welcome")} !! </Paragraph>
    </ViewContainer>
  );
}
