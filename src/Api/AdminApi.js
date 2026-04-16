import api from "./axios"

/* Candidate */

export const createCandidate = async (candidateDto) => {
  const response = await api.post("/admin/Candidate", candidateDto);
  return response.data;
};

/* Election */

export const createElection = async (electionDto) => {
  const response = await api.post("/admin/election", electionDto);
  return response.data;
};

/* Election Result */

export const createElectionResult = async (resultDto) => {
  const response = await api.post("/admin/electionresults", resultDto);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await api.post("/admin/login", {
    email,
    password
  });

  return response.data;
};