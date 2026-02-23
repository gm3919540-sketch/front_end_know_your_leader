import React, { useEffect, useState } from 'react'
import cand1 from '../Images/cand.jpg'
import { getAllCandidate } from '../Api/CandidateApi';
import { Link } from 'react-router-dom';
export const ALLPROFILE = () => {
    
    const [cand, setcand] = useState([]);
    const [err, setErr] = useState("");
    useEffect(()=>{
        const fetAllCandidate = async ()=>{
         try{
          const b = await getAllCandidate();
          console.log(b);
            setcand(b);
         } catch{
             setErr("failed to fetch candidate");
         }

        };
        fetAllCandidate();
        },[]);
  

  return (
    <div className=' w-screen h-[80vh] px-3 py-3 flex'>
        <div className='flex   flex-wrap  gap-4 px-4'>
            {cand.map((e,i)=>(
                <Link to={`/candidate/${e.id}`} key={`${e.id}`}>
              <div className='flex gap-4 justify-center align-center '>
            <div className='h-[20vh] w-[20vh] bg-blue-500'>
                <img  className='h-[100%] w-[100%] object-fit'  src={e.ImageUrl} alt="" />
            </div>
            <div className='bg-gray-500 h-[20vh] w-[40vh] rounded-xl px-2'>
                <h1 className='text-[3vh]'>Name : {e.name}</h1>
                <h1 className='text-[3vh]'>Gender: {e.gender}</h1>
                <h1 className='text-[3vh]' >Party:{e.party}</h1>
            </div>
            </div>
            </Link>
            ) )}
            

            

        </div>
    </div>
  )
}
