 import {DataSource} from 'typeorm'
import DotenvConfiguration from './dotenv.config'
 export class AppDataSource{
    public Connection:DataSource
    constructor(){
       this.Connection=new DataSource({
        type: "mysql",
        host:DotenvConfiguration.DATABASE_HOST,
        port:Number(DotenvConfiguration.DATABASE_PORT),
        username:DotenvConfiguration.DATABASE_USERNAME,
        password:DotenvConfiguration.DATABASE_PASSWORD,
        database:DotenvConfiguration.DATABASE,
        entities: [`${__dirname}/../entity/*.entity{.ts,.js}`],
        synchronize: true,
        logging: true,
         })
    }
 }
 