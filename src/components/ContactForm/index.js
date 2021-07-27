import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {

    const [ formState, setFormState ] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );

    const [ errorMessage, setErrorMessage ] = useState('');

    const { name, email, message } = formState;

    function handleChange(event) {

        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            setErrorMessage(!isValid ? 'Your email is invalid' : '');
        } else {
            setErrorMessage(!event.target.value.length? `${event.target.name} is required.` : ``);
        }

        if (!errorMessage) {
            setFormState({ ...formState, [ event.target.name ] : event.target.value })
        }
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>

                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {
                    errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )
                }
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;