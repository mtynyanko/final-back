import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  console.log('listen at ', port);
  await app.listen(port);
}
bootstrap();
