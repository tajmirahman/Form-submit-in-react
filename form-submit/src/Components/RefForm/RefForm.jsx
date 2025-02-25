import { useEffect, useRef, useState } from "react";



const RefForm = () => {

    const nameRef= useRef(null);
    const emailRef= useRef(null);
    const passwordRef= useRef(null);

    const [error, setError]=useState('');

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleFormSubmit=e=>{
        e.preventDefault();

        if(passwordRef.current.value.length <= 6){
            setError('Password must be 6 character!')
        }
        else{
            setError('')
        }

        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div className="bg-slate-300 p-3"> 

            <form onSubmit={handleFormSubmit}>

                <input ref={nameRef} type="text" name="text" className="border-2 border-gray-100" placeholder="Name" /><br /><br />
                
                <input ref={emailRef} type="email" name="email" placeholder="email" className="border-2 border-gray-100" /><br /><br />

                <input type="password" ref={passwordRef}  id="" /><br />
                {
                    error && <p className="text-red-700">{error}</p>
                }
                
                <input type="submit" className="border-2 border-gray-100" />

            </form>
        </div>
    );
};

export default RefForm;