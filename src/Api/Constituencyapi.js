
import api from "./axios";

export const fetchAllState = async ()=>{
    const response = await api.get("/api/constituencies/getallstate");
    return response.data;
}
export const fetchDistrictByState = async (state) => {
  const response = await api.get(
    `/api/constituencies/state/${encodeURIComponent(state)}`
  );
  return response.data;
};

export const fetchConstituencyNameByDistrict = async(district) =>{
    const response = await api.get(`/api/constituencies/by-district/${district}`);
    return response.data;
}
export const getId = async(constituency)=>{
    const response = await api.get(`api/constituencies/getIdByConstitency/${constituency}`);
    return response.data;
}

export const fetchAllYear = async()=>{
  const response = await api.get("/api/elections/allyears");
  return response.data;
}