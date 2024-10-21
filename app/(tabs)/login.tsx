import { TYPES } from "@/core/config/types";
import { useInjection } from "@/config/ioc/ioc.react";

import ViewContainer from "@/components/layout/ViewContainer";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "react-native";
import AuthenticateUserHandler from "@/core/contexts/auth/application/AuthenticateUserHandler";
import CheckUserLoggedInHandler from "@/core/contexts/auth/application/CheckUserLoggedInHandler";

export default function HomeScreen() {
  const authenticateUserHandler = useInjection<AuthenticateUserHandler>(
    TYPES.AuthenticateUserHandler
  );

  const checkUserLoggedInHandler = useInjection<CheckUserLoggedInHandler>(
    TYPES.CheckUserLoggedInHandler
  );

  function logIn() {
    authenticateUserHandler.execute({
      email: "email@email.com",
      password: "123",
    });
  }

  function checkLogIn() {
    checkUserLoggedInHandler.execute();
  }

  return (
    <ViewContainer>
      <Text className="text-blue-500">Login</Text>
      <Button title="Log In" onPress={() => logIn()} />
      <Button title="Check Log In" onPress={() => checkLogIn()} />
    </ViewContainer>
  );
}
