import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import QZoons from '../QZoon/QZoons';


const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button className='mb-4' variant="outline-secondary"> <FaGithub />Login With Github</Button>
            <div>
                <h2 className='mb-2'>Find Us On</h2>
            <ListGroup>
                <ListGroup.Item className='h-25'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
            </ListGroup>
            </div>
            <QZoons></QZoons>
        </div>
    );
};

export default RightNav;