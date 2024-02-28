import { Global, Module } from '@nestjs/common';
import { ToolService } from './tool.service';
import { ToolController } from './tool.controller';

@Global()
@Module({
  providers: [ToolService],
  controllers: [ToolController],
  exports: [ToolService],
})
export class ToolModule {}
