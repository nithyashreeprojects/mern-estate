import React from 'react'
import {GoogleAuthProvider} from 'firebase/auth';
import {app} from '../firebase'

export default function OAuth() {
    const handleGoogleClick=async () =>{
      try{
        const provider=new GoogleAuthProvider()
        const auth=getAuth(app)
        const result=await signInWithPopup(auth,provider)
        console.log(result);
        

      } catch (error){
        console.log('Could not sign-in with Google',error);

      }
 

    }
  return (
    <button onClick={handleGoogleClick} type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">Continue with Google</button>
  )
}


