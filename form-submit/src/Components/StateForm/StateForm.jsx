import { useState } from "react";


const StateForm = () => {

    const [email, setEmail]= useState();
    const [name, setName]= useState();

    const handelSubmitForm=e=>{
        e.preventDefault();
        console.log(email);
    }

    const 

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    

    return (
        <div className="bg-slate-300 p-3">
            <form onSubmit={handelSubmitForm}>
                <input  type="text" name="text"  placeholder="name"/><br /><br />

                <input onChange={handleEmailChange} type="email"  name="email" placeholder="email"/><br /><br />

                <input type="password" name="" id="" /><br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default StateForm;