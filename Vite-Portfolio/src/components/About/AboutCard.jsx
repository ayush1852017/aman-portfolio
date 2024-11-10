import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className='orange'>Aman Zaidi </span>
            from <span className='orange'> <a className='orange' href="https://en.wikipedia.org/wiki/Gola_Gokarannath">Gola Gokaran Nath, India.</a></span>
            <br />I am a dedicated Chartered Accountant with expertise in financial 
            analysis, taxation, and corporate accounting,
            <br /> with certification from the Institute of Chartered Accountants 
            of India (ICAI) and specialized training in international accounting standards.
            <br /> I am passionate about helping businesses optimize their financial 
            operations and ensure regulatory compliance.
            <br />
            I look forward to joining a company where I can leverage my expertise 
            in financial management and strategic planning to drive business growth.
            <br />
            Apart from accounting and finance, here are some other aspects of my professional interests:
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Financial Technology and Digital Transformation
            </li>
            <li className='about-activity'>
              <ImPointRight /> Business Advisory and Risk Management
            </li>
            <li className='about-activity'>
              <ImPointRight /> Corporate Sustainability Reporting
            </li>
            <li className='about-activity'>
              <ImPointRight /> Investment Analysis and Portfolio Management
            </li>
          </ul>

          <p style={{ color: "#f46850" }}>
            "Precision in numbers, excellence in service!"{" "}
          </p>
          <footer className='blockquote-footer'>Aman Zaidi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;