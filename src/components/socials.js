import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Socials = (props) => {
    return (
        <>
<ul style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingLeft: "0", margin: "0" }}>
                <li className={props.listClass} style={{ listStyle: "none", margin: "1rem" }}>
                    <a
                        href="https://github.com/cocampo0915"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <FaGithub color="#211F1F" />
                    </a>
                </li>
                <li className={props.listClass} style={{ listStyle: "none", margin: "1rem" }}>
                    <a
                        href="https://www.linkedin.com/in/camille-ocampo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <FaLinkedin color="#0077b5" />
                    </a>
                </li>
                <li className={props.listClass} style={{ listStyle: "none", margin: "1rem" }}>
                    <a
                        href="mailto:cocampo0915@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <FaEnvelope color="E4405F" />
                    </a>
                </li>
            </ul>
            </>
    )
}

export default Socials