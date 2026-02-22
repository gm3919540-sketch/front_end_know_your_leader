import api from "./axios"

export const getAllCandidate = async()=>{
 const response = await api.get(
    `/api/candidate/allCandidatedata`
 );
 return response.data;
} 

export const getCandidateById = async(id)=>{
    const response = await api.get(`/api/candidate/${id}`);
    return response.data;
}