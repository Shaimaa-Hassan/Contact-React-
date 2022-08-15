import './App.css';
import Listcontacts from './Component/Listcontacts';
import Createcontact from './Component/Createcontact';
// import avatarone from './Pictures/avatar1.png';
import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
function App() {

  const [contacts, setContacts] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>setContacts(res.data))
  },[])
  const deletecontact = (id)=>{
   setContacts(contacts.filter((c)=>c.id !==id))
  }
  
  return (
<Routes> 
<Route exact path='/'  element= {<Listcontacts contacts={contacts} ondeletecontact={deletecontact}/> }/>
<Route exact path='/create' element={<Createcontact contacts={contacts}/>}/>
</Routes> 
 );
}

export default App;
