import axios from "../axios";
import {Item} from "./create-item";

interface GetItemPayload {
  itemId: string;
}

interface GetItemResponse extends Item {}

const getItem = async ({itemId}: GetItemPayload) => {
  const result = await axios.get(`/items/${itemId}`);

  return result.data as any;
};

export default getItem;
