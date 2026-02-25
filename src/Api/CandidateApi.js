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
export const getCandidateSummary = async(id)=>{
    const response = await api.get(`/api/candidate/ai/summary/${id}`);
    return response.data;
}
export const filter = async(name,party,state,constituency)=>{
    const response = await api.get(`/api/candidate/search/BYANUFIELD`,{
        params: {
            name,
            party,
            state,
            constituency
        }
    });
    return response.data;
}