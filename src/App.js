import React, {Component} from "react"
import ContactsCard from "./components/ContactCard";
import HeaderMy from "./components/HeaderMy";
import FooterMy from "./components/FooterMy";

class App extends Component {
    
    render() {

        return (
            <div className="page-wrapper">
                <HeaderMy />
                <main className="contacts container">
                
                    <ContactsCard
                        contacts = {{
                            // name : "Mr. Whaskerson",
                            imgUrl : "http://placekitten.com/300/200",
                            phone : "(212) 555-1234",
                            mail : "mr.whiskaz@catnap.meow",
                            punch : "testPunch"
                        }}
                    />
    
                    <ContactsCard
                        contacts = {{
                            name : "Fluffykins",
                            imgUrl : "http://placekitten.com/400/200",
                            phone : "(212) 555-2345",
                            mail : "fluff@me.com",
                            punch : "testPunch"
                        }}
                    />
    
                    <ContactsCard
                        contacts = {{
                            name : "Destroyer",
                            imgUrl : "http://placekitten.com/400/300",
                            phone : "(212) 555-3456",
                            mail : "ofworlds@yahoo.com",
                            punch : "testPunch"
                        }}
                    />
    
                    <ContactsCard
                        contacts = {{
                            name : "Felix",
                            imgUrl : "http://placekitten.com/200/100",
                            phone : "(212) 555-4567",
                            mail : "thecat@hotmail.com",
                            punch : "testPunch"
                        }}
                    />
    
                </main>
                <FooterMy />
            </div>
        )
    }
}

export default App