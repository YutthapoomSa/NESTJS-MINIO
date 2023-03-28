import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploaderModule } from './api/file-uploader/file-uploader.module';
import { FileUploaderModule } from './api/file-uploader/file-uploader.module';
import { FileUploaderModule } from './api/file-uploader/file-uploader.module';

@Module({
  imports: [FileUploaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
