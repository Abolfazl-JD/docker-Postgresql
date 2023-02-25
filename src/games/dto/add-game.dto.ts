import { IsNotEmpty, IsString } from "class-validator"

export class AddGameDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    company: string

    @IsNotEmpty()
    @IsString()
    releaseYear: string
}