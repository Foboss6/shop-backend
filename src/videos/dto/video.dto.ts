import { IsNotEmpty, IsString } from 'class-validator';
import { NewVideo } from 'src/graphql';

export class VideoDto extends NewVideo {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}
