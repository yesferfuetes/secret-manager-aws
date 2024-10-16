import { Module } from '@nestjs/common';
import { DatabaseModule } from './data-base.module';
import { CustomConfigModule } from './config/custom-config.module';

@Module({
  imports: [DatabaseModule, CustomConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
