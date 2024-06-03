import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import QZoons from '../QZoon/QZoons';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button className='mb-4' variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div>
                <h2 className='mb-2'>Find Us On</h2>
            <ListGroup>
                <ListGroup.Item className='mb-2' ><FaFacebook className='text-primary h3'></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaInstagram className='text-danger h3'></FaInstagram> Instagram</ListGroup.Item>
                <ListGroup.Item><FaTwitter className='text-primary h3'></FaTwitter> Twitter</ListGroup.Item>
            </ListGroup>
            </div>
            <QZoons></QZoons>
            <div
            className=''
            style={{
                backgroundImage: `url(${bg})`,
                height: '500px', 
                width: '305px',
                backgroundSize: 'cover',
                
            }}
            >
            <div className='text-center text-white h4 p-4  mt-5 '>
            <p className='mt-5'>Create an amazing news paper</p>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui.</p>
          <button className='bg-danger text-white p-2 my-2 h5'>Lorem more</button>
            </div>
            </div>
        </div>
    );
};

export default RightNav;