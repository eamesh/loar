import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import LocalFilesInterceptor from './localFiles.interceptor';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as crypto from 'crypto';
import { extname } from 'path';
import { UserGuard } from '../guard/user.guard';

@Controller('user/upload')
export class UploadController {
  @Post()
  @UseGuards(UserGuard)
  @UseInterceptors(
    LocalFilesInterceptor({
      fieldName: 'file',
      path: '/upload/img',
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    return {
      status: 'ok',
      file,
    };
  }

  @Post('files')
  @UseGuards(UserGuard)
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './static/upload/img',
        filename: (req, file, cb) => {
          crypto.randomBytes(16, function (err, raw) {
            cb(
              err,
              err
                ? undefined
                : `${raw.toString('hex')}${extname(file.originalname)}`,
            );
          });
        },
      }),
    }),
  )
  uploads(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files.length);
    return files;
  }
}
