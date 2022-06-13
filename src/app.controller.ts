import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Album } from './models/post';


@Controller("album")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Album[] {
    return this.appService.FindsAll();
  }

  @Post()
  add(@Body() params: Album): Album {
    return this.appService.Add(params);
  }

  @Get(":id")
  findOneorFails(@Param("id") id: number): Album {
    return this.appService.findOrFails(id);
  }

}
