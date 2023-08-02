import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
export const App = () => {
  const [data,setdata]=useState({subject:"",email:"",password:""})
  const {subject,email,password}=data
  const ch=(e)=>{
    console.log(e.target.name)
  }
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(typeof e.target)
  
    emailjs.sendForm('service_8y8wvyo', 'template_3r93xcr', e.target, 'dQNSciWQl-RjUsCp3')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div>
      <center>
      <form  onSubmit={submithandler}>
      <input type="text" name="subject" placeholder='subject' onChange={ch} /><br/><br/>
      <input type="text" name="to_email" placeholder='to email'/><br/><br/>
      <input type="text" name="message" placeholder='message'/><br/><br/>
      <button >submit</button>
      </form>
      </center>
    </div>
  )
}
export default App