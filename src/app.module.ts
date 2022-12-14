import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
// import { UserController } from "./user/user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: null,
      database: "nestjs",
      entities: [User],
      synchronize: true
    })
    , UserModule],
  // controllers: [AppController, UserController],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
