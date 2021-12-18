import React from 'react'
import buddget from "../Buddget-logos_black.png"

export default function Home() {
    return (
        <div class="w3-container w3-center">
            <h2> Your budget is your buddy! </h2>
            <img src={buddget} alt="Buddget Logo" width="350"/>
            <h3> Wanna get your financial house in order? Try Buddget! Buddget makes it easy to track your expenses so you're not left wondering why your bank account is empty whenever you check it!</h3>
        </div>
    )
}
