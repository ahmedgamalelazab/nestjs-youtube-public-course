import { Controller, Get, Injectable, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

@Injectable()
export class AppService {
  sayHello() {
    return "hello world";
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello() {
    return this.appService.sayHello();
  }
}

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// bootstrap my project
async function bootstrap(){
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.listen(3333, ()=> {
        console.log("app is up and running on port 3333");
    })
}

bootstrap();