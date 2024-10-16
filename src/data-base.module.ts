import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE', // Token de conexion a la BD.
    useFactory: async (configService: ConfigService) => {
      const secrets = configService.get('database');
      const connection = new DataSource({
        type: secrets.type,
        host: secrets.host,
        port: secrets.port,
        username: secrets.user,
        password: secrets.password,
        database: secrets.name,
        entities: [],
        synchronize: false,
        logging: true,
      });
      return await connection.initialize();
    },
    inject: [ConfigService],
  },
];

@Module({
  providers: databaseProvider,
  exports: databaseProvider,
})
export class DatabaseModule {}
