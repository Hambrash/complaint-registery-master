import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from '../../Images/Image1.png';
import Image1 from '../../Images/Image2.png';
import Image2 from '../../Images/Image3.png';
import { Navigation } from '../user/Naviagtion';

const Home = () => {
   return (
      <>
         <Navigation/>
         
         <br /><br />
         <Container className='text-center'>
            <h3 className='text-center home-h3'>ResolveHub - Complaint Management System</h3>
            <br /><br />
            <p className="lead">
               The world's most effective solution for managing customer complaints effectively, 
               an agile and scalable online complaint management system. Manage customer complaints 
               gently with a high-tech Complaint Management System.
            </p>
            <Button variant="outline-danger">Register a Complaint</Button>
         </Container>
         <br /><br />

         {/* What is ResolveHub Section */}
         <Container className='text-center'>
            <Row>
               <Col lg="6">
                  <img src={Image} alt="ResolveHub Illustration" className='img-fluid' />
               </Col>
               <Col lg="6">
                  <br /><br />
                  <h3 className='home-h3-2'>What is ResolveHub?</h3>
                  <p className='home-p'>
                     ResolveHub is a web-based application that allows users to file, track, 
                     and resolve complaints online. It is commonly used by organizations, institutions, 
                     and government bodies to streamline the process of handling complaints, ensuring efficient 
                     and organized management of issues and concerns.
                  </p>
               </Col>
            </Row>
         </Container>
         <br />

         {/* Uses of ResolveHub Section */}
         <Container className='text-center'>
            <Row>
               <Col lg="6">
                  <br /><br />
                  <h3 className='home-h3-2'>What are the uses of ResolveHub?</h3>
                  <p className='home-p'>
                     ResolveHub improves customer satisfaction by offering a streamlined platform for submitting 
                     and tracking complaints. <br /><br /> Overall, it enhances efficiency, saves time and resources, 
                     and strengthens customer relationships, making it an essential tool for businesses focused on quality service.
                  </p>
               </Col>
               <Col lg="6">
                  <br /><br />
                  <img src={Image1} alt="ResolveHub Uses Illustration" className='img-fluid' />
               </Col>
            </Row>
         </Container>
         <br />

         {/* Advantages Section */}
         <Container className='text-center'>
            <Row>
               <Col lg="6">
                  <img src={Image2} alt="ResolveHub Advantages Illustration" className='img-fluid home-img' />
               </Col>
               <Col lg="6">
                  <br /><br />
                  <h3 className='home-h3-2'>Advantages of ResolveHub</h3>
                  <p className='home-p'>
                     1. ResolveHub provides a simple, user-friendly interface for customers to submit complaints and track their status, 
                     making the process hassle-free and transparent. <br /><br />
                     2. By automating the organization, prioritization, and assignment of complaints, ResolveHub enables quicker and more effective resolutions. <br /><br />
                     3. The system reduces the need for manual intervention, minimizing administrative costs and freeing up resources for other critical tasks. <br />
                  </p>
               </Col>
            </Row>
         </Container>
         <br />

         {/* Services Section */}
         <Container className='text-center'>
            <h3 className="home-h3">Our Services</h3>
            <ListGroup className='home-list'>
               <br />
               <ListGroup.Item>Dashboard to access the software solution</ListGroup.Item>
               <ListGroup.Item>Admin Login to view the complaints</ListGroup.Item>
               <ListGroup.Item>Admin: Create, add, and edit service engineers</ListGroup.Item>
               <ListGroup.Item>Admin can also add and edit agents</ListGroup.Item>
               <ListGroup.Item>Assigning the complaints to service engineers</ListGroup.Item>
               <ListGroup.Item>Service Engineer: Log in and view the assigned complaints</ListGroup.Item>
               <ListGroup.Item>Service Engineer: Resolve the complaints and update the status</ListGroup.Item>
               <ListGroup.Item>Customer: Log in and create a complaint</ListGroup.Item>
               <ListGroup.Item>Customer: View the status of the complaint and check its history</ListGroup.Item>
            </ListGroup>
         </Container>
         <br />

         {/* Footer */}
         <Container className='text-center'>
            <p className='home-bg'> &#169; Copyrights by ResolveHub <br /> {new Date().getFullYear()}</p>
         </Container>
      </>
   );
};

export default Home;
