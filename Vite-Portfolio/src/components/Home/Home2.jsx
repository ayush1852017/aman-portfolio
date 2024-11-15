import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='orange'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
             Experienced Accountant with 7 years of expertise in financial reporting, tax compliance (including GST, TDS, and Income Tax), and audit management. Skilled in preparing balance sheets, managing accounts payable and receivable, conducting reconciliations, and generating detailed financial reports. Proficient in accounting software and committed to ensuring accuracy and regulatory compliance. Strong analytical skills, with a focus on ethical standards and effective collaboration.
              <br />
              <br />I am proficient in industry-standard tools like
              <i>
                <b className='orange'> Tally prime, SAP, and Excel </b>
              </i>
              <br />
              <br />
              My areas of expertise include &nbsp;
              <i>
                <b className='orange'>Financial Reporting and Analysis </b> and
                specialized knowledge in{" "}
                <b className='orange'>
                  Tax Planning and Compliance
                </b>
              </i>
              <br />
              <br />
              I consistently stay updated with the latest in
              <i>
                <b className='orange'>
                  {" "}
                  GAAP Standards and Tax Regulations
                </b>
              </i>
              &nbsp; while utilizing modern accounting software like
              <i>
                <b className='orange'> Xero </b>
              </i>
              &nbsp;and
              <i>
                <b className='orange'> NetSuite</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>CONNECT WITH ME</h1>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/aman-zaidi-3663b2117/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;