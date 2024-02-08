import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => {
    Logger.log(`应用已启动: http://localhost:3000`, bootstrap.name);
  });
}
bootstrap();
