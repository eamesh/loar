import { Global, Module } from '@nestjs/common';
import { ShuhaiService } from './shuhai.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  providers: [ShuhaiService],
  exports: [ShuhaiService],
})
export class ShuhaiModule {}
