import { Body, CacheInterceptor, CacheKey, CacheTTL, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AddGameDto } from './dto/add-game.dto';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {

    constructor(private readonly gamesService: GamesService){}

    @UseInterceptors(CacheInterceptor)
    @CacheKey('get-games')
    @CacheTTL(60)
    @Get()
    getGames(){
        return this.gamesService.findGames()
    }

    @Get('test')
    testingCache(){
        return this.gamesService.testCaching()
    }
    

    @Post()
    createNewGame(@Body() addGameDto: AddGameDto){
        return this.gamesService.addGame(addGameDto)
    }
}
