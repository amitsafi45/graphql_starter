 import {DataSource} from 'typeorm'
 export class AppDataSource{
    public Connection:DataSource
    constructor(){
       this.Connection=new DataSource({
        type: "mysql",
        host: "localhost",
        port:3306,
        username: "root",
        password: "Password@12345",
        database: "test",
        entities: [`${__dirname}/../entity/*.entity{.ts,.js}`],
        synchronize: true,
        logging: true,
         })
    }
 }
 