import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from "./users.service";

@Module({
  imports : [TypeOrmModule.forFeature([User])],
  controllers : [UserController],
  providers: [UsersService],
  exports : [UsersService]
})

export class UserModule {}