import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SettingService } from './setting.service';
import { UserGuard } from '../user/guard/user.guard';

@Controller('setting')
export class SettingController {
  constructor(private readonly setting: SettingService) {}
  @Get('privacy')
  async getPrivacy() {
    return await this.setting.getKey('privacy');
  }

  @Get('agree')
  async getAgree() {
    return await this.setting.getKey('agree');
  }

  @Post()
  @UseGuards(UserGuard)
  async saveSetting(@Body() payload: any) {
    return await this.setting.upsert(payload);
  }

  @Get('system')
  async getSettings() {
    console.log(123);
    return await this.setting.getSystem();
  }

  @Get(':key')
  async getSetting(@Param('key') key: string) {
    return await this.setting.getKey(key);
  }

  @Post('save')
  @UseGuards(UserGuard)
  async save(@Body() payload: any) {
    return await this.setting.save(payload);
  }
}
