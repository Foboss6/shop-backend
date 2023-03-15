import { Injectable, Logger } from '@nestjs/common';
import { Product } from './models';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { DeleteProductInput, NewProductInput, UpdateProductInput } from './dto';

@Injectable()
export class ProductService {
  private readonly logger: Logger = new Logger(ProductService.name);

  constructor(@InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>) {
    // const product = {
    //   title: 'test-product-2',
    //   price: 3.5,
    //   qty: 89,
    //   category: 'test',
    //   // description: 'test product with description',
    // };
    // this.productRepo.save(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async createProduct(product: NewProductInput): Promise<Product> {
    this.logger.log(`Creating a new product: ${JSON.stringify(product)}`);

    const dbResp = await this.productRepo.save(product);
    this.logger.debug(`DB resp: ${JSON.stringify(dbResp)}`);

    return dbResp;
  }

  async updateProduct({ id, ...update }: UpdateProductInput) {
    this.logger.log(`Updating the product by id "${id}" with data: ${JSON.stringify(update)}`);

    const updateResp = await this.productRepo.update({ id }, update);
    this.logger.debug(`DB resp: ${JSON.stringify(updateResp)}`);

    if (updateResp.affected > 0) return this.productRepo.findOneBy({ id });

    // TODO throw an exception
    return;
  }

  async deleteProduct({ id }: DeleteProductInput) {
    this.logger.log(`Deleting the product by id "${id}"`);

    const dbResp = await this.productRepo.delete({ id });
    this.logger.debug(`DB resp: ${JSON.stringify(dbResp)}`);

    return dbResp.affected;
  }
}
