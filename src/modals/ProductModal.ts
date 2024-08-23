export class ProductModal {
  category: string | undefined;
  description: string | undefined;
  id: number | undefined;
  image: string | undefined;
  price: number | undefined;
  rating:
    | {
        count: number | undefined;
        rate: number | undefined;
      }
    | undefined;
  title: string | undefined;
}
