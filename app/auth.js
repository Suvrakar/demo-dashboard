import { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { config } from "./aws-config";

const client = new CognitoIdentityProviderClient({ region: config.region });

export const signUp = async (username, password, email) => {
  const command = new SignUpCommand({
    ClientId: config.clientId,
    Username: username,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  });

  try {
    const response = await client.send(command);
    console.log("Sign up successful:", response);
    return response;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const signIn = async (username, password) => {
  const command = new InitiateAuthCommand({
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: config.clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  });

  try {
    const response = await client.send(command);
    console.log("Sign in successful:", response);
    return response.AuthenticationResult;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
