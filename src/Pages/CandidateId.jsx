import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../Api/axios';
import { electionResult, getCandidateById, getCandidateSummary } from '../Api/CandidateApi';
import cand1 from '../Images/cand.jpg'

export const CandidateId = () => {

    const{ id} =  useParams();
  
    const [Candidate, setCandidate] = useState(null);
    const [Summary, setSummary] = useState(null);
    const [loadingSummary, setLoadingSummary] = useState(false);
    const [celection,Setcelection] = useState([]);
    const  [loadingcelection,setloadingcelection] = useState(false);
     const handleElectionresult = async (id)=>{
      try{
        setloadingcelection(true);
        const data =  await electionResult(id);
        Setcelection(data);
        console.log(data);

      }catch(error){
  console.log("Error:", error);
      
      }finally {
   setloadingcelection(false);
}
     }

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
   <div className="bg-white shadow-xl rounded-2xl w-[90%] max-w-5xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">

      {/* Left Side Image */}
     <div className="w-full md:w-1/3 flex items-center md:items-start flex-col">
        <img
         className="w-40 h-40 md:w-64 md:h-64 rounded-2xl object-cover shadow-md"
          src={Candidate.imageUrl}
          alt="Candidate"
        />
        <div className='flex gap-4 flex-col mt-4 items-center md:items-start'>
        <a href={`https://knowyourleader-production.up.railway.app/${id}`}>
          Download Profile
           </a>
           <p onClick={()=>handleSummary(id)}>Ai magic</p>
           <p onClick={()=>handleElectionresult(id)} >Past Election</p>
           </div>
      </div>

      {/* Right Side Details */}
      <div className="flex-1 space-y-4">
          
        <div>
          <h2 className="text-3xl font-semibold">{Candidate.name}</h2>
          <p className="text-gray-500">{Candidate.party}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

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

   {celection.length > 0 && (
  <div className="mt-8 w-[90%] max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden">

    {/* Table Header */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-gray-200 text-gray-700 font-semibold p-4 text-sm">
      <div>Result Status</div>
      <div>Votes Received</div>
      <div>District</div>
      <div>Constituency</div>
      <div>State</div>
      <div>Election Type</div>
      <div>Year</div>
    </div>

    {/* Table Body */}
    {celection.map((ele, i) => (
     <div
  key={i}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 p-4 border-t hover:bg-gray-50 text-sm"
>
        <div className="font-medium">{ele.resultStatus}</div>
        <div>{ele.votesrecived}</div>
        <div>{ele.district}</div>
        <div>{ele.constituencyname}</div>
        <div>{ele.state}</div>
        <div>{ele.electionType}</div>
        <div>{ele.year}</div>
      </div>
    ))}
  </div>
)}
  </div>
 
</>
  )
}
