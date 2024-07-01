import axios from "../axios";

interface GetUserWalletAddressPayload {
  referenceId: string;
}

interface GetUserWalletAddressResponse {
  address: string;
  provider: string;
}

const GetUserWalletAddress = async ({
  referenceId,
}: GetUserWalletAddressPayload) => {
  const result = await axios.get("/users/" + referenceId + "/wallet-address");

  return result.data as GetUserWalletAddressResponse;
};

export default GetUserWalletAddress;
