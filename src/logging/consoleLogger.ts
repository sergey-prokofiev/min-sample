import { ILogger } from './iLogger';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsoleLogger implements ILogger {
  public info(message: string): void {
    console.log(message);
  }
}
