import { Query, Resolver ,Arg, Mutation, UseMiddleware} from "type-graphql";
import RequestValidator from "../middleware/requestValidator.middleware";
import { Login, SignInInput } from "../schema/auth.schema";

@Resolver()
class AuthResolver{

    @Query(()=>String)
    async ping(){
        return "pong"
    }

    @Query(()=>Login)
    async login(){
        return{
            accessToken:"sjbsjkbv",
            refreshToken:"jsbchsj"
        }
    }

    @Mutation(()=>Login)
    @UseMiddleware(RequestValidator.validate(SignInInput))
    async signIn(@Arg('data')data:SignInInput){
       return {
        accessToken:"sjbsjkbv",
            refreshToken:"jsbchsj"
       }
    }
}
export default new AuthResolver()