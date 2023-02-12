import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';

@Module({
  providers: [VideoService, VideoResolver],
})
export class VideoModule {}
