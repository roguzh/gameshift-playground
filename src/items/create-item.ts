import axios from "../axios";
import {Collection} from "../collections/create-collection";

export interface Attribute {
  traitType: string;
  value: string;
}

type RoyaltyRecipient =
  | {
      referenceId: string;
      address?: null;
      share: number;
    }
  | {
      referenceId?: null;
      address: string;
      share: number;
    };

interface RoyaltyInfo {
  sellerFeeBasisPoints: number;
  recipients: RoyaltyRecipient[];
}

interface Details {
  attributes: Attribute[];
  royaltyInfo: RoyaltyInfo;
  collectionId: string;
  description: string;
  imageUrl: string;
  name: string;
}

interface CreateItemPayload {
  details: Details;
  destinationUserReferenceId: string;
}

interface Owner {
  referenceId?: string;
  address?: string;
}

export interface Item {
  id: string;
  attributes: Attribute[];
  created: number;
  name: string;
  collection: Collection;
  description: string;
  environment: string;
  imported: boolean;
  imageUrl: string;
  status: string;
  forSale: boolean;
  mintAddress: string;
  owner: Owner;
  price?: Object;
  escrow?: boolean;
  priceCents?: number;
}

interface CreateItemResponse extends Item {}

const createItem = async ({
  details,
  destinationUserReferenceId,
}: CreateItemPayload) => {
  const result = await axios.post("/unique-assets", {
    details,
    destinationUserReferenceId,
  });

  return result.data as CreateItemResponse;
};

export default createItem;
