import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../Api/axios';
import { getCandidateById, getCandidateSummary } from '../Api/CandidateApi';
import cand1 from '../Images/cand.jpg'

export const CandidateId = () => {

    const{ id} =  useParams();
  
    
    const [Candidate, setCandidate] = useState(null);
    const [Summary, setSummary] = useState(null);
    const [loadingSummary, setLoadingSummary] = useState(false);
    const [celection,Setcelection] = useState(null);
    const  [loadingcelection,setloadingcelection] = useState(false);
    const handleSummary = async (id)=>{
      try{
        setLoadingSummary(true);
        const d = await getCandidateSummary(id)
        setSummary(d);
        console.log(d);
      }catch(error){
  console.log("Error:", error);
      }finally{
        setLoadingSummary(false);
      }
    }

    console.log(id);
    useEffect(()=>{
        const fetchCandidate = async(id)=>{
            try{
            const b = await getCandidateById(id);
            console.log(b);
            setCandidate(b);
            }catch{
             console.log("candidate not found");
            }
        }
        fetchCandidate(id);
    },[])
    if (!Candidate) return <h2>Loading...</h2>;

  return (
    <>
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">

    {/* Title */}
    <h1 className="text-4xl font-bold mb-8">User Profile</h1>

    {/* Main Card */}
    <div className="bg-white shadow-xl rounded-2xl w-[90%] max-w-5xl p-8 flex gap-8">

      {/* Left Side Image */}
      <div className="w-1/3 flex justify-center flex-col">
        <img
          className="w-64 h-64 rounded-2xl object-cover shadow-md"
          src={Candidate.ImageUrl}
          alt="Candidate"
        />
        <div className='flex gap-4'>
        <a href={`http://localhost:8081/api/candidate/profile/${id}`}>
          Download Profile
           </a>
           <p onClick={()=>handleSummary(id)}>Ai magic</p>
           </div>
      </div>

      {/* Right Side Details */}
      <div className="flex-1 space-y-4">

        <div>
          <h2 className="text-3xl font-semibold">{Candidate.name}</h2>
          <p className="text-gray-500">{Candidate.party}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-lg font-medium">{Candidate.gender}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Current Assets</p>
            <p className="text-lg font-medium">
              ₹ {Candidate.currentdeclared_assets}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Current Liabilities</p>
            <p className="text-lg font-medium">
              ₹ {Candidate.currentdeclared_liabilities}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Active Cases</p>
            <p className="text-lg font-medium">
              {Candidate.totoalnumberofcase}
            </p>
          </div>

        </div>

        {/* Biography Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Biography</h3>
          <p className="text-gray-700 leading-relaxed">
            {Candidate.biofraphy}
          </p>
        </div>

      </div>

    </div>
    {loadingSummary && <h1>Getting info...</h1>}

{Summary && (
  <div className="mt-6 bg-white p-6 rounded-xl shadow-md w-[90%] max-w-5xl">
    <h2 className="text-2xl font-semibold mb-2">User Summary</h2>
    <p className="text-gray-700">{Summary}</p>
  </div>
)}
   
   {loadingcelection && <h1>Getting election....</h1>}

   {celection && (
    <div>
      </div>
   )}
  </div>
 
</>
  )
}
