import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomConfigModule } from './config/custom-config.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.select(CustomConfigModule).get(ConfigService);
  const port = configService.get('port');
  app.listen(port, () => {
    console.log('Application started on port: ', port);
  });
}
bootstrap();
