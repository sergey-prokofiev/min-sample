import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { ILogger } from './iLogger';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {

  public constructor(
    @Inject('ILogger') private readonly logger: ILogger,
  ) {}

  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((responseObject: unknown) => {
        this.logger.info('Hello World');
        return responseObject;
      }),
    );
  }
}
