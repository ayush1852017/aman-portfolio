import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle1 from "../Particle1";
import ProfessionalAchievements from "./ProfessionalAchievements";
import SkillSet from "./SkillSet";
import Aboutcard from "./AboutCard";
import profile2 from "../../Assets/aman_profile.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className='about-section'>
      <Particle1 />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className='orange'>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className='about-img'
          >
            <Tilt>
              <img
                src={profile2}
                alt='about'
                className='img-fluid profile-img'
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className='project-heading'>
          Professional <strong className='orange'>Skillset </strong>
        </h1>

        <SkillSet />

        <h1 className='project-heading'>
          <strong className='orange'>Tools</strong> I use
        </h1>
        <Toolstack />

        <ProfessionalAchievements />
      </Container>
    </Container>
  );
}

export default About;
