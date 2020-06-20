import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseLoggerModule } from './logging/baseLoggerModule';
import { LoggerInterceptorModule } from './logging/loggerInterceptorModule';

@Module({
  imports: [BaseLoggerModule.configure(), LoggerInterceptorModule.configure()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
