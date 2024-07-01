import axios from "../axios";
import {Collection} from "./create-collection";

interface GetCollectionPayload {
  collectionId: string;
  includeStats?: boolean;
}

interface GetCollectionResponse extends Collection {}

const getCollection = async ({
  collectionId,
  includeStats,
}: GetCollectionPayload) => {
  const result = await axios.get(
    `/asset-collections/${collectionId}?includeStats=${includeStats}`,
  );

  return result.data as GetCollectionResponse;
};

export default getCollection;
