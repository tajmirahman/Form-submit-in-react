
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import FormSubmit from './Components/FormSubmit/FormSubmit'
// import StateForm from './Components/StateForm/StateForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'

function App() {


  return (

    const handleSignUp=data=>{

    console.log(data)
  }

  const handleUpdate=data=>{
    console.log(data)
  }
    
    <>
    
      {/* <FormSubmit></FormSubmit> */}
      {/* <StateForm></StateForm> */}

      {/* <RefForm></RefForm> */}

{/*       <HookForm></HookForm> */}


  <ReuseableForm
        formTitle={'Sign Up'}
        handleSubmitForm={handleSignUp}
      ></ReuseableForm>

      <ReuseableForm
        formTitle={'Update Profile'}
        submitBtn={'Update'}
        handleSubmitForm={handleUpdate}
      ></ReuseableForm>
   
      
      
    </>
  )
}

export default App
