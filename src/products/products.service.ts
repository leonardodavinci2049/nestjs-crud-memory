import { Injectable } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private ProductRegistration: ProductEntity[] = [];

  create(createProductDto: CreateProductDto) {
    const { name, description, price, stock } = createProductDto;
    const newProduct = new ProductEntity(
      UuidV4(),
      name,
      description,
      price,
      stock,
    );

    this.ProductRegistration.push(newProduct);

    return newProduct;
  }

  findAll() {
    return this.ProductRegistration;
  }

  findOne(id: string) {
    const product = this.ProductRegistration.find(
      (product) => product.id === id,
    );

    if (!product) {
      throw new Error(`roduct with id ${id} not found`);
    }

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const { name, description, price, stock } = updateProductDto;

    const product = this.findOne(id);

    product.updateWith({ name, description, price, stock });

    return product;
  }

  remove(id: string): ProductEntity {
    const product = this.findOne(id);

    this.ProductRegistration = this.ProductRegistration.filter(
      (product) => product.id !== id,
    );

    return product;
  }
}
