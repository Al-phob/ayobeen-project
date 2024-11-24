"use client"

//import {  motion } from "framer-motion"
import Typewriter from "typewriter-effect"

const TextAnimation = () => {
    return(
        <div className="h2 text-green-600">
            <Typewriter
                options={{
                    strings: ["AyoBeen"],
                    autoStart: true,
                    loop: true,
                }}
            />

        </div>
        
    )
}

export default TextAnimation