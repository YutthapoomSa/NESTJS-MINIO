import { Injectable } from '@nestjs/common';
import { CreateFileUploaderDto } from './dto/create-file-uploader.dto';
import { UpdateFileUploaderDto } from './dto/update-file-uploader.dto';

@Injectable()
export class FileUploaderService {
  create(createFileUploaderDto: CreateFileUploaderDto) {
    return 'This action adds a new fileUploader';
  }

  findAll() {
    return `This action returns all fileUploader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUploader`;
  }

  update(id: number, updateFileUploaderDto: UpdateFileUploaderDto) {
    return `This action updates a #${id} fileUploader`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUploader`;
  }
}
