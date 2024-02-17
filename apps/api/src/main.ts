import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import * as JSONBig from 'json-bigint';
import helmet from 'helmet';

JSON.parse = JSONBig.parse;
JSON.stringify = JSONBig.stringify;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  app.enableCors();
  app.use(helmet());

  app.setGlobalPrefix('api');
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => {
    Logger.log(`应用已启动: http://localhost:3000`, bootstrap.name);
  });
}
bootstrap();