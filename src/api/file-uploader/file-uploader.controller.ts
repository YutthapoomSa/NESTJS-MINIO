import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileUploaderService } from './file-uploader.service';
import { CreateFileUploaderDto } from './dto/create-file-uploader.dto';
import { UpdateFileUploaderDto } from './dto/update-file-uploader.dto';

@Controller('file-uploader')
export class FileUploaderController {
  constructor(private readonly fileUploaderService: FileUploaderService) {}

  @Post()
  create(@Body() createFileUploaderDto: CreateFileUploaderDto) {
    return this.fileUploaderService.create(createFileUploaderDto);
  }

  @Get()
  findAll() {
    return this.fileUploaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileUploaderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileUploaderDto: UpdateFileUploaderDto) {
    return this.fileUploaderService.update(+id, updateFileUploaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileUploaderService.remove(+id);
  }
}
