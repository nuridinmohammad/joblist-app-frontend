import axios from "axios";

export const getAllPositions = async (params) => {
  return await axios.get(`http://localhost:5000/api/recruitment/positions?`, {
    params,
  });
};
