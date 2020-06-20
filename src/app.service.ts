import { Inject, Injectable } from '@nestjs/common';
import { ILogger } from './logging/iLogger';

@Injectable()
export class AppService {
  public constructor(@Inject('ILogger') private readonly logger:ILogger){

  }
  getHello(): string {
    this.logger.info('XXX');
    return 'Hello World!';
  }
}
