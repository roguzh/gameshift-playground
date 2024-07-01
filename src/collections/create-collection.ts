import axios from "../axios";

interface CreateCollectionPayload {
  name: string;
  description: string;
  imageUrl: string;
}

interface CollectionStats {
  numMinted: number;
  floorPrice: number;
  numListed: number;
  numOwners: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  environment: string;
  imageUrl?: string;
  imported: boolean;
  mintAddress?: string;
  created: number;
  stats?: CollectionStats;
}

interface CreateCollectionResponse extends Collection {}

const createCollection = async ({
  name,
  description,
  imageUrl,
}: CreateCollectionPayload) => {
  const result = await axios.post("/asset-collections", {
    name,
    description,
    imageUrl,
  });

  return result.data as CreateCollectionResponse;
};

export default createCollection;
