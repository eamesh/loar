import { FileInterceptor } from '@nestjs/platform-express';
import { Injectable, mixin, NestInterceptor, Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import * as crypto from 'crypto';
import { extname } from 'path';

interface LocalFilesInterceptorOptions {
  fieldName: string;
  path?: string;
}

function LocalFilesInterceptor(
  options: LocalFilesInterceptorOptions,
): Type<NestInterceptor> {
  @Injectable()
  class Interceptor implements NestInterceptor {
    fileInterceptor: NestInterceptor;
    constructor(configService: ConfigService) {
      console.log(configService);
      const filesDestination = './static';

      const destination = `${filesDestination}${options.path}`;

      const multerOptions: MulterOptions = {
        storage: diskStorage({
          destination,
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
      };

      this.fileInterceptor = new (FileInterceptor(
        options.fieldName,
        multerOptions,
      ))();
    }

    intercept(...args: Parameters<NestInterceptor['intercept']>) {
      return this.fileInterceptor.intercept(...args);
    }
  }

  return mixin(Interceptor);
}

export default LocalFilesInterceptor;
