// Software and technical tools used
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFileExcel, FaFileInvoiceDollar } from "react-icons/fa";
import { SiXero, SiSap, SiTableau, SiQuickbooks } from "react-icons/si";
import { BsBarChartFill } from "react-icons/bs";
import './about.css'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaFileExcel className="tech-icon" />
          <p className="tech-name">Advanced Excel</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiQuickbooks className="tech-icon" />
          <p className="tech-name">QuickBooks</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiSap className="tech-icon" />
          <p className="tech-name">SAP ERP</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiXero className="tech-icon" />
          <p className="tech-name">Xero</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiTableau className="tech-icon" />
          <p className="tech-name">Tableau</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaFileInvoiceDollar className="tech-icon" />
          <p className="tech-name">GST Software</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <BsBarChartFill className="tech-icon" />
          <p className="tech-name">Business Analytics</p>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;