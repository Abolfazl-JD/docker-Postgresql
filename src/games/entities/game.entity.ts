import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export class GameEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    company: string

    @Column()
    releaseYear: string
}