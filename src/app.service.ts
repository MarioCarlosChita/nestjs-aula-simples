import { Injectable } from '@nestjs/common';
import { BANCO, Album } from './models/post';

@Injectable()
export class AppService {

  public FindsAll(): Album[] {
    return BANCO;
  }

  public Add(post: Album): Album {
    BANCO.push(post);
    return post;
  }

  public findOrFails(id: number): Album {
    return BANCO[id];
  }

}
