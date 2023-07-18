import React,{useState} from "react";
import './style.css';
import { Link } from "react-router-dom";

const Login = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");


    const handleSubmit = async(e) =>{
        setMessage("Successfully logged in!");
   
         e.preventDefault();
         setIsSubmitted(true);
         const data ={
            username: username,
            password: password
         }
         console.log({data});
    
         
        
    try{
    const response = await fetch('https://dummyjson.com/auth/login',{
        method:'POST',
        headers:{
        'Content-Type':'application/json',
    },
    body : JSON.stringify(data)
    })

    const result = await response.json();
    console.log(result);

    }

    catch (error){
        console.log(error.message);
    }
    }
    
    return (
            <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username" type="text" 
                onChange = {(e)=> setUsername(e.target.value)}
                />
                <br/>
                <br/>
                <input placeholder=" Enter password" type="password"
                onChange={(p)=>setPassword(p.target.value)}/>
                <br/>
                <br/>
               <Link to={`/product`}> <button  className="submit">Login</button></Link> 
              
            </form>
            {isSubmitted && <p>{message}</p>}
        </div>
    )
}

export default Login;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
// //   const navigate = useNavigation();
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       username: username,
//       password: password,
//     };
//     console.log(data);

//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
//       console.log(result);

//       // Check if login was successful
//       if (result.success) {
//         // Show success message
//         setLoginSuccess(true);

//         // Redirect to the products page after a brief delay
//         setTimeout(() => {
//         //   navigate('/products');
//         }, 1000);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {loginSuccess && <p>Login successful!</p>}
//       <form className='form' onSubmit={handleSubmit}>
        
          
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required placeholder='Enter username'
//           />
//            <br/>
//            <br/>
    
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required placeholder='Enter password'
//           />
//           <br/>
//           <br/>
       
//         <button className="btn" type="submit">
//           <Link to="/login">Login</Link>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;