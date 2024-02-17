import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SettingService } from './setting.service';

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
  async saveSetting(@Body() payload: any) {
    return await this.setting.upsert(payload);
  }

  @Get(':key')
  async getSetting(@Param('key') key: string) {
    return await this.setting.getKey(key);
  }
}
