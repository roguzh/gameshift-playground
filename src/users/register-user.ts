import axios from "../axios";

interface RegisterUserPayload {
  referenceId: string;
  email: string;
  externalWalletAddress?: string;
}

interface RegisterUserResponse {
  referenceId: string;
  email: string;
}

const registerUser = async ({
  referenceId,
  email,
  externalWalletAddress,
}: RegisterUserPayload) => {
  const result = await axios.post("/users", {
    referenceId,
    email,
    externalWalletAddress,
  });

  return result.data as RegisterUserResponse;
};

export default registerUser;
