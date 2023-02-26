import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from 'src/graphql';
import { ProductDto } from './dto/product.dto';
// import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class ProductResolver {
  // private pubSub: PubSub = new PubSub();

  constructor(private readonly productService: ProductService) {}

  @Query('getAllProducts')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Mutation('createProduct')
  createProduct(@Args('input') product: ProductDto) {
    const addedProduct = this.productService.createProduct(product);

    // this.pubSub.publish('addedProduct', { addedProduct });

    return addedProduct;
  }

  // @Subscription(() => Product, {
  //   filter: (payload, variables) => payload.addedProduct.title === variables.title,
  // })
  // async addedProduct() {
  //   this.pubSub.asyncIterator('addedProduct');
  // }
}
