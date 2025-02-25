

const FormSubmit = () => {


    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(e.target.text.value);
        console.log(e.target.email.value);
    }


    return (
        <div className="bg-slate-300 p-3">



            <form onSubmit={handleFormSubmit}>
                <input type="text" name="text" className="border-2 border-gray-100" placeholder="Name" /><br /><br />
                <input type="email" name="email" placeholder="email" className="border-2 border-gray-100" /><br /><br />
                <input type="submit" className="border-2 border-gray-100" />

            </form>



            



        </div>
    );
};

export default FormSubmit;