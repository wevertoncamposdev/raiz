import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from '@core/auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get('/')
  @Header('Content-Type', 'text/html; charset=utf-8')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
