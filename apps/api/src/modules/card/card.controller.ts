import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { Member } from '@loar/database';
import { MemberGuard } from '../member/guard/member.guard';

@Controller('card')
export class CardController {
  constructor(private readonly card: CardService) {}

  @Post()
  @UseGuards(MemberGuard)
  async createCard(@Body() payload: any, @Req() req) {
    return await this.card.createCard(payload, req.user as Member);
  }

  @Post('list')
  @UseGuards(MemberGuard)
  async getList(@Body() payload: any, @Req() req) {
    return await this.card.getList(payload.type, req.user as Member);
  }
}
