import { PartialType } from '@nestjs/mapped-types';
import { CreateFileUploaderDto } from './create-file-uploader.dto';

export class UpdateFileUploaderDto extends PartialType(CreateFileUploaderDto) {}
