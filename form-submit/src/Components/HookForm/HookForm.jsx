import { useState } from "react";
import useInputState from "../../Hookes/useInputState";


const HookForm = () => {

    const [value, handleChange] = useInputState('rojoni')
    const [email, handleChangeEmail]= useInputState('email')
    const [password, handleChangePassword]= useInputState('password');

    const [error, setError]= useState('');


    const handleFormSubmit=e=>{
        e.preventDefault();

        if(password.length <= 6){
            setError('must be needed 6 character!')
        }
        else{
            
            console.log('hook form', value);
            console.log(email)
            console.log(password)
        }

        
    }

    return (
        <div >
            <form onSubmit={handleFormSubmit}>
                <input type="text" name={value} onChange={handleChange} className="border-2 border-gray-100" /><br /><br />

                <input type="email" name={email} onChange={handleChangeEmail} className="border-2 border-gray-100" /><br /><br />
                <input type="password" name={password} onChange={handleChangePassword} className="border-2 border-gray-100" /><br />
                {
                    error && <p>{error}</p>
                }

                <input type="submit" className="border-2 border-gray-100" />

            </form>
        </div>
    );
};

export default HookForm;