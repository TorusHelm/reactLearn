import React from "react"
import ContactsCard from "./components/ContactCard";

function App() {
    return (
        <div className="contacts">
        
            <ContactsCard
                contacts = {{
                    // name : "Mr. Whaskerson",
                    imgUrl : "http://placekitten.com/300/200",
                    phone : "(212) 555-1234",
                    email : "mr.whiskaz@catnap.meow",
                    punch : "testPunch"
                }}
            />

            <ContactsCard
                contacts = {{
                    name : "Fluffykins",
                    imgUrl : "http://placekitten.com/400/200",
                    phone : "(212) 555-2345",
                    email : "fluff@me.com",
                    punch : "testPunch"
                }}
            />

            <ContactsCard
                contacts = {{
                    name : "Destroyer",
                    imgUrl : "http://placekitten.com/400/300",
                    phone : "(212) 555-3456",
                    email : "ofworlds@yahoo.com",
                    punch : "testPunch"
                }}
            />

            <ContactsCard
                contacts = {{
                    name : "Felix",
                    imgUrl : "http://placekitten.com/200/100",
                    phone : "(212) 555-4567",
                    email : "thecat@hotmail.com",
                    punch : "testPunch"
                }}
            />

        </div>
    )
}

export default App