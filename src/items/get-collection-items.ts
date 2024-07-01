import axios from "../axios";
import {Item} from "./create-item";

interface GetCollectionItemsPayload {
  collectionId: string;
}

interface Meta {
  page: number;
  perPage: number;
  totalPages: number;
  totalResults: number;
}

interface GetCollectionItemsResponse {
  data: Item[];
  meta: Meta;
}

const getCollectionItems = async ({
  collectionId,
}: GetCollectionItemsPayload) => {
  const result = await axios.get(`/asset-collections/${collectionId}/assets`);

  return result.data as GetCollectionItemsResponse;
};

export default getCollectionItems;
