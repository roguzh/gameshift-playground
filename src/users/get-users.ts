import axios from "../axios";

interface Meta {
  page: number;
  perPage: number;
  totalPages: number;
}

interface GetUsersResponse {
  data: Array<{
    referenceId: string;
    email: string;
  }>;
  meta: Meta;
}

const GetUsers = async () => {
  const result = await axios.get("/users");

  return result.data as GetUsersResponse;
};

export default GetUsers;
