import axios from "../axios";
import {Collection} from "./create-collection";

interface GetCollectionsResponse {
  data: Collection[];
  meta: Meta;
}

interface Meta {
  page: number;
  perPage: number;
  totalPages: number;
  totalResults: number;
}

const getCollections = async () => {
  const result = await axios.get("/asset-collections");

  return result.data as GetCollectionsResponse;
};

export default getCollections;
