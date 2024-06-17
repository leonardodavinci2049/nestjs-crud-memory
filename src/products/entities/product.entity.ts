interface UpdateWithOptions {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export class ProductEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
  ) {}

  updateWith({ name, description, price, stock }: UpdateWithOptions) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
    this.stock = stock ?? this.stock;
  }
}
