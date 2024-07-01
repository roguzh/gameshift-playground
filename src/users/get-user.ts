import axios from "../axios";

interface GetUserPayload {
  referenceId: string;
}

interface GetUserResponse {
  referenceId: string;
  email: string;
}

const GetUser = async ({referenceId}: GetUserPayload) => {
  const result = await axios.get("/users/" + referenceId);

  return result.data as GetUserResponse;
};

export default GetUser;
