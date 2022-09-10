import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import {StoreUserDto} from "./dto/StoreUserDto";
import { LoginUserDto } from "./dto/LoginUserDto";

@Controller("user")
export class UserController {

  constructor(private readonly usersService: UsersService) {}

  @Get("/from-user-controller")
  fromUserController() {
   return  this.usersService.findAll()
  }

  @Post('store')
  store(@Body() storeUserDto : StoreUserDto) {
      return {body : storeUserDto} ;
  }

  @Post('login')
  login(@Body() loginUserDto : LoginUserDto) {
    return this.usersService.findByEmail(loginUserDto.email)
  }

}