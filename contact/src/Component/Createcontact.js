import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Createcontact.css';
import close from '../Pictures/close.jpg';
// import serializeForm from 'form-serialize';

// function Createcontact({oncreatecontact}) {
//   const handlesubmit =(e)=>{
//     e.preventDefault();
//     const values = serializeForm(e.target, {hash:true});

//     if(oncreatecontact){
// oncreatecontact(values);
//     }

//   console.log("values:", values);
  
// };
function Createcontact({contacts}){
 const [title, setTitle] =useState("");
 const [body, setBody] =useState("");
 const [url, setUrl] =useState("");
 const[id, setId]= useState(contacts.length);
const handlesubmit=(e)=>{
 e.preventDefault();
 setId(contacts.length + 1);
 contacts.push({'id':id ,'title': title, 'body': body, 'url': url});
 console.log(id,title,body,url);
}

  return (
    <div>
      <Link to='/' className='close-create-contact'><img style={{width:40, margin:10}} src={close} alt='close'/></Link>
      <form onSubmit={handlesubmit} className='form-create-contact'>
    <div className='create-contact-details'>
    <input className='inp-create-name' onChange={(e)=>setTitle(e.target.value)} type='text' name='name' placeholder='name'/>
    <input className='inp-create-handle' onChange={(e)=>setBody(e.target.value)} type='text' name='handle' placeholder='handle'/>
    <input className='inp-create-handle' onChange={(e)=>setUrl(e.target.value)} type='url' name='url' placeholder='url'/>
    <button className='add-contact'>add contact</button>
    </div>
      </form>
    </div>
  )
}

export default Createcontact