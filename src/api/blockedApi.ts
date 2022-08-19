import { BlockedUser } from "../global/globalTypes";
import { api } from "./api";
import { DefaultReturn, error, success } from "./indexApi";

interface GetAllBLockedUsersApiReturn extends DefaultReturn {
  data: {
    message: string;
    data: BlockedUser[];
  };
}
export async function getAllBlockedUsersApi(): Promise<GetAllBLockedUsersApiReturn> {
  try {
    const response = await api.get("/block/get/all");

    return success({ response: response, message: `${response.data.message}` });
  } catch (e) {
    return error({ message: `Error: ${e}}` });
  }
}

export async function blockUserApi(
  username: string,
  block: number
): Promise<DefaultReturn> {
  try {
    const response = await api.put("/block/block", {
      username: username,
      isBlocked: block,
    });

    return success({ response: response, message: "Success" });
  } catch (e) {
    return error({ message: `Error: ${e}}` });
  }
}
