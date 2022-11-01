import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  src: string;
}
