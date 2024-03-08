import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MemberGuard } from '../member/guard/member.guard';
import { Request } from 'express';
import { StockService } from './stock.service';
import { Member, Prisma } from '@loar/database';
import { FavoriteDto } from './dto/favorite.dto';
import { DeleteFavoriteDto } from './dto/delete-favorite.dto';
import { BuyDto } from './logic/dto/buy.dto';
import { HandleStockService } from './logic/handle-stock.service';
import { MemberPositionDto } from './dto/member-position.dto';
import { UserGuard } from '../user/guard/user.guard';
import { StockSubscribeService } from './subcrib/stock-subcribe.service';
import { OrderSubscribeDto } from './subcrib/dto/order-subscribe.dto';

@Controller('stock')
export class StockController {
  constructor(
    private readonly stockService: StockService,
    private readonly handleStock: HandleStockService,
    private readonly stockSubscribe: StockSubscribeService,
  ) {}

  @Get('favorite')
  @HttpCode(HttpStatus.OK)
  @UseGuards(MemberGuard)
  async getFavorite(@Req() req: Request) {
    return await this.stockService.findFavoriteStocks(req.user as Member);
  }

  @Get(':id/favorite')
  @HttpCode(HttpStatus.OK)
  @UseGuards(MemberGuard)
  async checkFavorite(@Param('id') stock: number, @Req() req) {
    return await this.stockService.checkFavorite(req.user as Member, stock);
  }

  @Post(':id/favorite')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async favorite(
    @Param('id') stock: number,
    @Req() req,
    @Body() data: FavoriteDto,
  ) {
    return await this.stockService.favorite(req.user as Member, stock, data);
  }

  @Delete('favorites')
  @UseGuards(MemberGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteFavorites(@Req() req, @Body() data: DeleteFavoriteDto) {
    return await this.stockService.deleteFavoriteByStockIds(
      req.user as Member,
      data,
    );
  }

  @Get(':id/panel')
  async getPanel(@Param('id') id: number) {
    return await this.stockService.stockPanel(id);
  }

  @Post('buy')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async buy(@Req() req, @Body() payload: BuyDto) {
    await this.handleStock.buy(payload, req.user as Member);
  }

  @Post('position/:id/sell')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(MemberGuard)
  async sell(@Param('id') id: number) {
    await this.handleStock.sell(id);
  }

  @Post('position')
  @HttpCode(HttpStatus.OK)
  @UseGuards(MemberGuard)
  async getMemberPositions(@Req() req, @Body() payload: MemberPositionDto) {
    return await this.stockService.getMemberPositions(
      req.user as Member,
      payload.market,
      payload.status,
    );
  }

  @Post('position/list')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getPostions(@Body() payload: any) {
    const { page, memberId, code, status, mode, market, pageSize, type } =
      payload;

    const where: any =
      +type !== 2
        ? {
            status: {
              not: 2,
            },
          }
        : {};
    const params = { memberId, status, mode, market };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    if (code !== '' && code !== undefined) {
      where.stockSymbol = {
        code,
      };
    }
    const { data, meta } = await this.stockService.getPostions({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      page,
      perPage: pageSize,
    });

    return {
      page: meta.currentPage,
      pageSize: meta.perPage,
      pageCount: meta.lastPage,
      itemCount: meta.total,
      list: data,
    };
  }

  @Post('position/:id/type')
  @UseGuards(UserGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePostionType(@Param('id') id: number, @Body() payload: any) {
    return await this.stockService.updatePostionType(id, payload);
  }

  @Post('position/:id/cancel')
  @UseGuards(MemberGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePostionTypeByMember(@Param('id') id: number, @Req() req: any) {
    return await this.stockService.cancelSubscribeMember(id, req.user.id);
  }

  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async createSubscribe(
    @Body() payload: Prisma.StockSubscribeUncheckedCreateInput,
  ) {
    return await this.stockSubscribe.createNew(payload);
  }

  @Post('subscribe/list')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async getSubscribeList(@Body() payload: any) {
    const { page, name, market, pageSize } = payload;

    const where: any = {};
    const params = { name, market };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    const { data, meta } = await this.stockService.getSubscribeList({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      page,
      perPage: pageSize,
    });

    return {
      page: meta.currentPage,
      pageSize: meta.perPage,
      pageCount: meta.lastPage,
      itemCount: meta.total,
      list: data,
    };
  }

  @Post('subscribe/order')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(UserGuard)
  async getSubscribeOrder(@Body() payload: any) {
    const { page, memberId, email, code, name, pageSize } = payload;

    const where: any = {};
    const params = { memberId, name, code };
    Object.keys(params).forEach((key) => {
      if (params[key] !== '' && params[key] !== undefined)
        where[key] = params[key];
    });

    if (email !== '' && email !== undefined) {
      where.member = {
        email,
      };
    }

    const { data, meta } = await this.stockService.getSubscribeOrder({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      page,
      perPage: pageSize,
    });

    return {
      page: meta.currentPage,
      pageSize: meta.perPage,
      pageCount: meta.lastPage,
      itemCount: meta.total,
      list: data,
    };
  }

  @Get('subscribe')
  @HttpCode(HttpStatus.OK)
  async getNews(@Query('market') market: string, @Query('type') type: string) {
    return await this.stockSubscribe.getNews(market, type);
  }

  @Get('subscribe/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(MemberGuard)
  async getSubscribeDetail(@Param('id') id: number) {
    return await this.stockSubscribe.findById(id);
  }

  @Get('subscribe/:id/admin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(UserGuard)
  async getSubscribeDetailAdmin(@Param('id') id: number) {
    return await this.stockSubscribe.findById(id);
  }

  @Put('subscribe/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async updateSubscribe(@Param('id') id: number, @Body() payload: any) {
    return await this.stockSubscribe.updateSubscribe(id, payload);
  }

  @Post('subscribe/:id/order')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(MemberGuard)
  async createSubscribeOrder(
    @Param('id') id: number,
    @Body() payload: OrderSubscribeDto,
    @Req() req,
  ) {
    return await this.stockSubscribe.createSubscribeOrder(
      id,
      payload,
      req.user as Member,
    );
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  async search(@Query('kwd') kwd: string) {
    return await this.stockService.search(kwd);
  }

  @Post('update/:id/subscribe')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(UserGuard)
  async updateMemberSubscribeType(
    @Param('id') id: number,
    @Body() payload: any,
  ) {
    return await this.stockSubscribe.updateMemberSubscribeType(id, payload);
  }

  @Post('subscribe/member')
  @HttpCode(HttpStatus.OK)
  @UseGuards(MemberGuard)
  async getSubscribeMemberList(@Req() req, @Body() payload: any) {
    return await this.stockSubscribe.getMemberSubscribeList(
      req.user as Member,
      payload,
    );
  }
}
