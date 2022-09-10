import { Controller, Get, Post, Req, Param} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getHello(): { number: number; name: string } {
    // return this.appService.getHello();
    return {name : 'Abood', number : 5}
  }

  @Post('store')
  store(@Req() req : Request) {
    console.log(req.body)
    return req.body;
  }

  @Post('/get-user/:userId')
  // getUser(@Param() params {userId : number}) {
  getUser(@Param() userId : number) {
    return userId;
  }
}
