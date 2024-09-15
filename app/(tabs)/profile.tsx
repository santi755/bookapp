import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Paragraph } from "@/components/atoms/text/paragraph";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View>
        <Paragraph className="text-blue-500">profile page 2...</Paragraph>
        <Paragraph className="text-blue-500">Otro text 2o!...</Paragraph>
      </View>
    </SafeAreaView>
  );
}
