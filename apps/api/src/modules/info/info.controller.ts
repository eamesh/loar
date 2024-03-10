import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserGuard } from '../user/guard/user.guard';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  @Post('/')
  @UseGuards(UserGuard)
  async info(@Body() payload: any) {
    return await this.infoService.info(payload.market);
  }
}
