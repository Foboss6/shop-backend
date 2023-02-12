import { Injectable } from '@nestjs/common';
import { User, Video } from 'src/graphql';
import { VideoDto } from './dto';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [];

  findAll(): Video[] {
    return this.videos;
  }

  create({ title, url, userId }: VideoDto): Video {
    const videoId: number = this.videos.length + 1;
    const video: Video = new Video();

    const author: User = new User();
    author.id = userId;
    author.name = `Author ${userId}`;

    video.id = videoId.toString();
    video.title = title;
    video.url = url;
    video.author = author;

    this.videos.push(video);

    return video;
  }
}
