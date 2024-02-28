import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MemberGuard } from '../member/guard/member.guard';
import { ToolService } from './tool.service';

@Controller('tool')
export class ToolController {
  constructor(private readonly tool: ToolService) {}

  @Post('price/conversion')
  @UseGuards(MemberGuard)
  async priceConversion(@Body() payload: any) {
    console.log(payload);
    return await this.tool.priceConversion(payload);
  }
}
