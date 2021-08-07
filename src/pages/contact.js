import React, { useState } from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import { navigate } from 'gatsby-link'

const Contact = (props) => {
    const [ formState, setFormState ] = useState({
        name: "",
        email: "",
        message: "",
    })

    const encode = (data) => {
        return Object.keys(data).map(key => (
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )).join('&')
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        })
        setFormState({
            name: "",
            email: "",
            message: "",
        })
        navigate('/')
    }

    return (
        <Layout>
            <Head page="Contact" />
            <h1>Contact</h1>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="text"
                        placeholder="Johnny Appleseed"
                        onChange={handleChange} 
                        value={formState.name}    
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email"
                        placeholder="johnny@apple.com"
                        onChange={handleChange}
                        value={formState.email} 
                    />
                </label>
                <label>
                    Message:
                    <textarea 
                        name="message"
                        placeholder="Hey what's up"
                        onChange={handleChange}
                        value={formState.message}
                    ></textarea>
                </label>
                <input type="submit" value="Contact Me" />
            </form>
        </Layout>
    )
}

export default Contact