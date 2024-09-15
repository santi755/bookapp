import { View } from "react-native";

import { Paragraph } from "@/components/atoms/text/paragraph";

export default function HomeScreen() {
  return (
    <View>
      <Paragraph className="text-blue-500">profile page...</Paragraph>
      <Paragraph className="text-blue-500">Otro text 2o!...</Paragraph>
    </View>
  );
}
