import { DynamicModule, Module, Scope } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './loggerInterceptor';
import { BaseLoggerModule } from './baseLoggerModule';

@Module({})
export class LoggerInterceptorModule {

  private static doStaff():DynamicModule{
    return {
      module: LoggerInterceptorModule,
      imports:[BaseLoggerModule],
      providers: [ {
        provide: APP_INTERCEPTOR,
        useClass: LoggerInterceptor,
        scope: Scope.REQUEST,
      },
    ],
    }
  }
  public static configure(): DynamicModule {
    const result = this.doStaff();
    console.log(result.imports);
    return result;
  }
}
