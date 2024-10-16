import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import { ConfigService } from '@nestjs/config';

export const fetchSecrets = async (secretName: string) => {
  const configService = new ConfigService();

  const client = new SecretsManagerClient({
    region: configService.get('AWS_REGION'),
    credentials: {
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    },
  });
  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
      }),
    );
    return JSON.parse(response.SecretString);
  } catch (error) {
    console.error('Error al obtener secretos desde AWS', error);
    throw error;
  }
};
