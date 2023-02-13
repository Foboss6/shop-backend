import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from 'src/graphql';
import { ProductDto } from './dto/product.dto';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query('getAllProducts')
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Mutation('createProduct')
  createProduct(@Args('input') product: ProductDto) {
    return this.productService.createProduct(product);
  }
}
