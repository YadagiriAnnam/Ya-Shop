const userName = "yadagiri";
const password = "yadagiri123";

export interface UserCreds {
    username: string|null;
    password: string|null;
}

export const validateUserCreds = (creds: UserCreds): boolean => {
    return creds.username === userName && creds.password === password;
}



export class Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;

  constructor(data?: Partial<Category>) {
    this.id = data?.id ?? 0;
    this.name = data?.name ?? "";
    this.slug = data?.slug ?? "";
    this.image = data?.image ?? "";
    this.creationAt = data?.creationAt ?? "";
    this.updatedAt = data?.updatedAt ?? "";
  }
}

export class Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;

  constructor(data?: Partial<Product>) {
    this.id = data?.id ?? 0;
    this.title = data?.title ?? "";
    this.slug = data?.slug ?? "";
    this.price = data?.price ?? 0;
    this.description = data?.description ?? "";
    this.category = new Category(data?.category);
    this.images = data?.images ?? [];
    this.creationAt = data?.creationAt ?? "";
    this.updatedAt = data?.updatedAt ?? "";
  }
}
