import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      socket: {
        host: 'redis',
        port: 6379,
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
