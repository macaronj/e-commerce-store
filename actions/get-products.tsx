import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryString {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (queryString: QueryString): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: queryString.colorId,
      sizeId: queryString.sizeId,
      categoryId: queryString.categoryId,
      isFeatured: queryString.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export default getProducts;
