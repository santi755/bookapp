import { TYPES } from "@/core/config/types";
import { useInjection } from "@/config/ioc/ioc.react";

import ViewContainer from "@/components/layout/ViewContainer";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "react-native";
import { TokenRepository } from "@/core/contexts/AuthContext/domain/TokenRepository";

export default function HomeScreen() {
  const tokenRepository = useInjection<TokenRepository>(TYPES.TokenRepository);

  function logIn() {
    tokenRepository.SetToken("123");
  }

  return (
    <ViewContainer>
      <Text className="text-blue-500">Login</Text>
      <Button title="Log In" onPress={() => logIn()} />
    </ViewContainer>
  );
}
