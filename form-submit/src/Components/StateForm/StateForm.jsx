import { useState } from "react";


const StateForm = () => {

    const [email, setEmail]= useState();
    const [name, setName]= useState();
    const [password, setPassword]= useState();
    const [error, setError]= useState('');

    const handelSubmitForm=e=>{
        e.preventDefault();

        if(password.length <=6){
            setError('password must be need 6 character!')
        }
        else{
            setError('');
            console.log(email, name, password);
        }

    }

    const handleNameChange=e=>{
        setName(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=e=>{
        setPassword(e.target.value);
    }
    

    return (
        <div className="bg-slate-300 p-3">
            <form onSubmit={handelSubmitForm}>

                <input onChange={handleNameChange}  type="text" name="text"  placeholder="name"/><br /><br />

                <input onChange={handleEmailChange} type="email"  name="email" placeholder="email"/><br /><br />

                <input onChange={handlePassword} type="password" name="" id="" /><br />
                {
                    error && <p className="text-rose-500">{error}</p>
                }

                <input type="submit" />
            </form>
        </div>
    );
};

export default StateForm;