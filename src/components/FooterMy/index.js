import React from 'react';
import {Container} from 'react-bootstrap';

function FooterMy() {
    return (
        <footer className="footer bg-warning text-dark py-3 font-weight-bold">
            <Container>
                <div className="row">
                    <div className="footer__item col-6">
                        <a className="footer__link link" href="tel:+79677464836">+7 967 746 48 36</a>
                    </div>
                    <div className="footer__item col-6 text-right">
                        <span>Country, City, Street 123</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default FooterMy;