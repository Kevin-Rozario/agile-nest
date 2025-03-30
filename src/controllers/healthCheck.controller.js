import { ApiResponse } from "../utils/apiReponse.util.js";

export const healthCheck = (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is up and running" }));
};
