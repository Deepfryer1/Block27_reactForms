import { useEffect, useState } from "react";

export default function SignUpForm({token, setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
// useEffect(()=>{

// },[token]);
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length < 8){
      console.error('username too short');
      return 
    }
    if(password.length < 6){
      return console.error('password too short')
    }
   
  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });
  const result = await response.json();
  console.log(result);
  setToken(result.token);
 
  } catch (error) {
    setError(error.message);
  }
  }
  return (
    <>
    
    <div>
      <h2>Sign Up!</h2>
       {error && <p>{error}</p>} 
      <form onSubmit={handleSubmit}> 
        <label>
          Username: 
        </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} /> 
        {/* if (username.length<8) {
          newErrors.username=
          isValid=false;
        } */}
        <label>
          Password: 
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
           {/* if (password.length<6) {
          newErrors.password=
          isValid=false;
        } */}
        </label>
        <button>Submit</button>
         </form>
      </div>
    </>
  );
}
