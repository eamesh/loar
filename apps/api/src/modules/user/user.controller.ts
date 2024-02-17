import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserGuard } from './guard/user.guard';
import { User } from '@loar/database';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly user: UserService) {}
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() payload: SigninDto) {
    return {
      code: 200,
      result: await this.user.signin(payload),
      message: '成功',
      type: 'success',
    };
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() payload: SignupDto) {
    return await this.user.signup(payload);
  }

  @Get()
  @UseGuards(UserGuard)
  profile(@Request() request) {
    return new UserEntity(request.user);
  }

  @Put('password')
  @UseGuards(UserGuard)
  async changePassword(@Body() payload: any, @Req() req) {
    return await this.user.changePassword(payload, req.user as User);
  }
}
