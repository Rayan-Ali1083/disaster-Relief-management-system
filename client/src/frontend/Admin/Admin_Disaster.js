import React ,{useState,useEffect} from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_relief_program.css'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Admin_Disaster() {


  const [disasterdet,Setdisasterdet] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/disasterinfo").then((response)=>{
      Setdisasterdet(response.data)
      //console.log(response.data)

    })

  },[])
  return (
    <>
        <Header/>
        <Admin_sidebar />
        <div class="card">
          <div className='button'>
          <Link to={'/Add_Disaster.js'}><button type="button" className="btn btn-primary" id='add_relief_progam'>Add Disaster</button></Link>
          <button type="button" className="btn btn-primary" id='add_relief_progam'>Add Disaster Category</button>
          <Link to={'/Disaster_Locations.js'}><button type="button" className="btn btn-primary"  id='add_relief_progam'>Disaster Locations</button></Link>
          {/* yeh aik different page pe jaye ha */}
          </div>
          
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Disaster ID</th>
      <th scope="col">Disaster Name</th>
      <th scope="col">Disaster date</th>
      <th scope="col">Disaster type</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
  {disasterdet.map((val)=>(
  <tr>
   <th scope="row">1</th>
   <td>{val.disaster_id}</td>
   <td>{val.disaster_name}</td>
   <td>{val.disaster_date}</td>
   <td>{val.disaster_type}</td>
   <td><button type="button" class="btn btn-primary">Disaster Details</button></td>
 </tr>


    ))}
  
  </tbody>
</table>
        </div>
        
    </>
  )
}

export default Admin_Disaster