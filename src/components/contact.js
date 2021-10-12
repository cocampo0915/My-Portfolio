import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Success from '../pages/success'

const Contact = (props) => {
    const [state, handleSubmit] = useForm("mwkawaye");
    if (state.succeeded) {
        return (
            <Success />
        )
    }

    return (
                <section className="contact-page fade-in" id="contact" style={{margin: "0"}}>
                    <article className="contact-form">
                        <h3>Contact Me!</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_next" value="/contact.html" />
                            <div className="form-group">
                                <input 
                                        id="name"
                                        type="name" 
                                        name="name"
                                        placeholder="name"  
                                        className="form-control"
                                />
                                <input 
                                        id="email"
                                        type="email" 
                                        name="email"
                                        placeholder="email"
                                        className="form-control"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="message"
                                    className="form-control"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button type="submit" disabled={state.submitting}>Submit</button>
                        </form>
                    </article>
                </section>
    )
}

export default Contact