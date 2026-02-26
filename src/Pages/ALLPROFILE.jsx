import React, { useEffect, useState } from 'react'
import cand1 from '../Images/cand.jpg'
import { filter, getAllCandidate } from '../Api/CandidateApi';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
export const ALLPROFILE = () => {
    
    const [cand, setcand] = useState([]);
    const [allCand, setAllCand] = useState([]); 
    const [err, setErr] = useState("");
    const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
    fetchAll(page);
  }, [page]);
    const fetchAll = async (pagenumber) => {
    const data = await getAllCandidate(pagenumber);
    setcand(data.content);
    setAllCand(data.content);
    setTotalPages(data.totalPages);
  };

  const handleSearch = async (name, party, state, constituency) => {

    const data = await filter(
      name || null,
      party || null,
      state || null,
      constituency || null
    );

    setcand(data.content);
  };
  const handleReset = () => {
    setcand(allCand);
  };
  

  return (
    <>

        <SearchBox onSearch={handleSearch} onReset={handleReset} />
    
    <div className="w-full min-h-[80vh] px-4 py-4">
  <div className="flex flex-wrap justify-center gap-6">
    {cand.map((e) => (
      <Link 
        to={`/candidate/${e.id}`} 
        key={e.id}
        className="w-full sm:w-[480px]"
      >
        <div className="flex gap-4 bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">

          {/* Image */}
          <div className="w-[120px] h-[120px] flex-shrink-0 bg-blue-500 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={e.ImageUrl}
              alt={e.name}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-semibold">
              Name: {e.name}
            </h1>
            <h1 className="text-md">
              Gender: {e.gender}
            </h1>
            <h1 className="text-md">
              Party: {e.party}
            </h1>
          </div>

        </div>
      </Link>
    ))}
  </div>
  <div className='flex gap-4 '>
      <button
      disabled={page==0}
      onClick={()=>setPage(page-1)}
      className="bg-blue-500 px-4 py-2 rounded" 
      >
       Prev 
      </button>

      <span>Page {page+1} of {totalPages} </span>

      <button
      disabled ={page === totalPages-1}
      onClick={()=>setPage(page+1)}
      className="bg-blue-500 px-4 py-2 rounded"
      >
        Next
      </button>

    </div>
</div>
    
    </>
  )
}
