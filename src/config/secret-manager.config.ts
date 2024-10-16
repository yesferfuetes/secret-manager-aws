import { ConfigService } from '@nestjs/config';
import { fetchSecrets } from '../shared/AWS/fetch-secrets';

export default async () => {
  const configService = new ConfigService();
  const secretName = configService.get('AWS_SECRET_NAME');
  const secrets = await fetchSecrets(secretName);
  return {
    port: 3000,
    database: {
      host: secrets.host,
      port: +secrets.port,
      name: secrets.dbname,
      password: secrets.password,
      type: secrets.engine,
      user: secrets.username,
    },
  };
};
