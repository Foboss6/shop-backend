import { Injectable } from '@nestjs/common';
import { ulid } from 'ulidx';
import { Product } from 'src/graphql';
import { ProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(@InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>) {}

  async getAllProducts() {
    return this.productRepo.find();
  }

  async createProduct({ title, price, qty, description, category }: ProductDto) {
    const product = { id: ulid(), title, price, qty, description, category };

    const dbResp = await this.productRepo.save(product);
    console.log(JSON.stringify(dbResp));

    return product;
  }
}
