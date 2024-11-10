// Professional accounting skills and competencies
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaChartLine, FaBalanceScale, FaHandHoldingUsd, FaChartPie } from "react-icons/fa";
import { BsBank2, BsCashStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";
import './about.css'

function SkillSet() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaChartLine className="tech-icon" />
          <p className="tech-name">Financial Analysis</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaBalanceScale className="tech-icon" />
          <p className="tech-name">Tax Planning</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <BsBank2 className="tech-icon" />
          <p className="tech-name">Banking & Finance</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaHandHoldingUsd className="tech-icon" />
          <p className="tech-name">Risk Management</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <BsCashStack className="tech-icon" />
          <p className="tech-name">Cash Flow Management</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <AiOutlineAudit className="tech-icon" />
          <p className="tech-name">Auditing</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaChartPie className="tech-icon" />
          <p className="tech-name">Financial Modeling</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <GiReceiveMoney className="tech-icon" />
          <p className="tech-name">Investment Analysis</p>
        </div>
      </Col>
    </Row>
  );
}

export default SkillSet;