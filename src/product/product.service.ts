import { Injectable } from '@nestjs/common';
import { ulid } from 'ulidx';
import { Product } from 'src/graphql';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  //   constructor() {}

  getAllProducts() {
    return this.products;
  }

  createProduct({ title, price, qty, description, category }: ProductDto) {
    const product = { id: ulid(), title, price, qty, description, category };

    this.products.push(product);

    return product;
  }
}
