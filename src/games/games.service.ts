import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddGameDto } from './dto/add-game.dto';
import { GameEntity } from './entities/game.entity';
import { Cache } from 'cache-manager'

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(GameEntity) private gamesRepo: Repository<GameEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}

    addGame(addGameDto: AddGameDto){
        return this.gamesRepo.save(addGameDto)
    }

    async testCaching() {
        // const keys: string[] = await this.cacheManager.store.keys()
        console.log('\n cache manager : \n',  await this.cacheManager.get('get-games'))
        return 'in-memory chache tested'
      }

    async findGames(){
        const cachedData = await this.cacheManager.get('get-games')
        console.log('caching ...', cachedData)
        return this.gamesRepo.find()
    }
}
