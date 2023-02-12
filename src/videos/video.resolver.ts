import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VideoDto } from './dto';
import { VideoService } from './video.service';

@Resolver('Video')
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  @Query()
  async videos() {
    return this.videoService.findAll();
  }

  @Mutation('createVideo')
  async create(@Args('input') videoInput: VideoDto) {
    return this.videoService.create(videoInput);
  }
}
