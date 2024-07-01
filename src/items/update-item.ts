import axios from "../axios";
import {Collection} from "../collections/create-collection";
import {Attribute, Item} from "./create-item";

interface UpdateItemPayload {
  itemId: string;
  imageUrl: string;
  attributes: Attribute[];
}

interface UpdateItemResponse extends Item {}

/**
 *
 * Attributes should be specified. If not, the item will be updated with an empty array of attributes.
 */
const updateItem = async ({
  itemId,
  imageUrl,
  attributes,
}: UpdateItemPayload) => {
  const result = await axios.put(`/unique-assets/${itemId}`, {
    imageUrl,
    attributes,
  });

  return result.data as UpdateItemResponse;
};

export default updateItem;
