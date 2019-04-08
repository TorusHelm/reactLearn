import React from 'react';
import {Container} from 'react-bootstrap';

function MainMy() {
    return (
        <main>
            <Container className="pt-3">
                <div className="custom-control custom-checkbox alert alert-primary pl-5">
                    <input type="checkbox" className="custom-control-input" id="customCheck-1" />
                    <label className="custom-control-label" htmlFor="customCheck-1">First Variant</label>
                </div>
                <div className="custom-control custom-checkbox alert alert-primary pl-5">
                    <input type="checkbox" className="custom-control-input" id="customCheck-2" />
                    <label className="custom-control-label" htmlFor="customCheck-2">Second Variant</label>
                </div>
                <div className="custom-control custom-checkbox alert alert-primary pl-5">
                    <input type="checkbox" className="custom-control-input" id="customCheck-3" />
                    <label className="custom-control-label" htmlFor="customCheck-3">Third Variant</label>
                </div>
                <div className="custom-control custom-checkbox alert alert-primary pl-5">
                    <input type="checkbox" className="custom-control-input" id="customCheck-4" />
                    <label className="custom-control-label" htmlFor="customCheck-4">Fourth Variant</label>
                </div>
            </Container>
        </main>
    )
}

export default MainMy;