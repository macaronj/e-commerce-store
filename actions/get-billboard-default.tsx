"use server";

import qs from "query-string";
import { Billboard } from "@/types";

interface QueryString {
  isDefault?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboardDefault = async (
  queryString: QueryString
): Promise<Billboard> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isDefault: queryString.isDefault,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export default getBillboardDefault;
