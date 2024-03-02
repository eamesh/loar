import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SettingService } from './setting.service';
import { UserGuard } from '../user/guard/user.guard';
import * as semver from 'semver';

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

  @Post('app/version')
  async getVersion(@Body() payload: any) {
    console.log(payload);
    const version = await this.setting.getKey('version');

    if (semver.gt(version.value.value, payload.version)) {
      const platforms = ['ios', 'andriod'];
      const wgt = await this.setting.getKey(platforms[payload.platform]);

      return {
        version: version.value.value,
        wgt: wgt.value.value,
        new: true,
      };
    }

    return {
      version: version.value.value,
      wgt: '',
      new: false,
    };
  }
}
