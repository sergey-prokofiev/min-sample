import { DynamicModule, Module, Scope } from "@nestjs/common";
import { ConsoleLogger } from './consoleLogger';

@Module({})
export class BaseLoggerModule {
  private static configureInternal(): DynamicModule {
    return {
      module: BaseLoggerModule,
      providers: [{
          provide: 'ILogger',
          useValue: new ConsoleLogger(),
          scope: Scope.REQUEST
      }],
      exports: ['ILogger']
    };
  }

  public static configure(): DynamicModule {
    try {
      const result =  this.configureInternal();
      console.log(result.exports);
      return result;
    } catch (e) {
      console.log('Error configuring web application');
      throw e;
    }
  }
}
