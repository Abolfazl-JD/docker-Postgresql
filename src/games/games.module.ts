import { CacheModule, Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './entities/game.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ GameEntity ]),
    CacheModule.register({
      isGlobal: true
    }),
  ],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
