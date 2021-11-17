import { useState } from 'react';
import Logo from '../assets/logo1.svg';
import ToggleSwitch from './toggleSwitch';
import axios from 'axios';



const RankPredictor=()=>{

  const[Seat_type,Set_Seat_type]=useState('');
  const[Jee_mains_rank,Set_Jee_mains_rank]=useState(0);
  const[Jee_advance_rank,Set_Jee_advance_rank]=useState(0);

  axios.post('jossa',{
  Seat_type:'OPEN',
  Jee_mains_rank:10000,
  Jee_advanced_rank:25000,
  Limit:2,
  Offset:0,
}).then((res)=>{
   console.log(res.data);
})

    return(
      <div className="rank-predicator" >
         <div><h3>As per Data of JOSSA 2019 - 2019 opening and Closing Rank</h3></div>
         <div className="logo">
            <div><hr/></div>
            <div><img src={Logo}/></div>
            <div><hr/></div>
         </div>
         <div className="dark-mode"><div><p>Category</p></div><p>{<ToggleSwitch/>}</p></div>
         <hr style={{border:'none',borderTop:'1px solid lightGray',width:'60%',display:"flex",justifyContent:'center'}}/>
         <div className="category">
           <div><button>Open</button></div>
           <div><button>OBC</button></div>
           <div><button>SC</button></div>
           <div><button>ST</button></div>
           <div><button>GEN-EWS</button></div>
         </div>
         <div className="ranks">
           <div><input placeholder="Jee Mains Rank"/></div>
           <div><input placeholder="Jee Advanced Rank"/></div>
           <div><button>Open</button></div>
         </div>
         
         <div>
           <table className="rank-table">
             <thead>
             <th>Sr.no</th>
             <th>Date</th>
             <th>Applicant Name</th>
             <th>Designation</th>
             <th>Email id</th>
             <th>Contact no.</th>
             <th>Education</th>
             <th>Status</th>
             <th>Action</th>
             </thead>
          
             <tbody>
               <td>1</td>
               <td>20/11/21</td>
               <td>Ankit Kumar</td>
               <td>hello</td>
               <td>hello</td>
               <td>hello</td>
               <td>Btech</td>
               <td>true</td>
               <td>yo</td>
             </tbody>




           </table>
         </div>
      </div>
    )
}

export default RankPredictor;