import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string
}
