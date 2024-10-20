import { TYPES } from "@/core/config/types";
import { useInjection } from "@/config/ioc/ioc.react";

import ViewContainer from "@/components/layout/ViewContainer";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "react-native";
import AuthenticateUserHandler from "@/core/contexts/AuthContext/application/AuthenticateUserHandler";

export default function HomeScreen() {
  const authenticateUserHandler = useInjection<AuthenticateUserHandler>(
    TYPES.AuthenticateUserHandler
  );

  function logIn() {
    authenticateUserHandler.execute({
      email: "email@email.com",
      password: "123",
    });
  }

  return (
    <ViewContainer>
      <Text className="text-blue-500">Login</Text>
      <Button title="Log In" onPress={() => logIn()} />
    </ViewContainer>
  );
}
