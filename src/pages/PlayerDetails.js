import React from 'react'
import './PlayerDetails.css'
import { useNavigate, Link } from 'react-router-dom';

function PlayerDetails() {
  const navigate = useNavigate();
  
  return (
      <div className="form">
          <img className='speaker' src={process.env.PUBLIC_URL + "/images/advertising 1.svg"} />
          <img className='vector' onClick={()=>navigate('/')} src={process.env.PUBLIC_URL + "/images/vector.svg"} />
          <h1 className='heading'>Player Details</h1>
           <img className='line' src={process.env.PUBLIC_URL + "/images/Line 1.svg"} />
          <span className='ply1'>Player 1</span>
          <h2 className='name1'>Name</h2>
           <img className='line2' src={process.env.PUBLIC_URL + "/images/Line2.svg"} />
   <span className='ply2'>Player 2</span>
          <h2 className='name2'>Name</h2>
           <img className='line3' src={process.env.PUBLIC_URL + "/images/Line2.svg"} />
      <button className='btn-go' onClick={()=>navigate('/game')}>Go</button>
      
      </div>
  );
}

export default PlayerDetails

