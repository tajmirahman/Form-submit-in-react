import PropTypes from 'prop-types';

const ReuseableForm = ({ formTitle, handleSubmitForm, submitBtn = 'submit' }) => {


    const submitLocalForm = e => {
        e.preventDefault();

        const data = {
            name: e.target.text.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmitForm(data);


    }


    return (
        <div className="bg-gray-100 p-3">

            <h2 className="mb-6 text-3xl">{formTitle}</h2>
            <form className="space-y-2" onSubmit={submitLocalForm}>

                <input type="text" name="text" /><br />
                <input type="email" name="email" /><br />
                <input type="password" name="password" /><br />
                <input type="submit" value={submitBtn} />

            </form>

        </div>
    );
};

ReuseableForm.propTypes = {
    formTitle: PropTypes.object.isRequired,
    handleSubmitForm: PropTypes.object.isRequired,
    submitBtn: PropTypes.object.isRequired,

}


export default ReuseableForm;