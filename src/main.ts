import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error', 'log', 'warn', 'debug'] });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
    }),
  );
  await app.listen(9000, '0.0.0.0');

  new Logger('main').log(`Application started at: ${await app.getUrl()}`);
}
bootstrap();
