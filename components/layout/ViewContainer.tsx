import { SafeAreaView } from "react-native-safe-area-context";

export default function ViewContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}
