import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaTrophy, FaCertificate, FaGraduationCap, FaChartLine } from "react-icons/fa";
import './about.css';
function ProfessionalAchievements() {
  const achievements = [
    {
      year: "2023",
      items: [
        "Completed Advanced Financial Modeling Certification",
        "Handled 50+ corporate tax filings",
        "Achieved 100% compliance rate in GST filings"
      ]
    },
    {
      year: "2022",
      items: [
        "Certified Management Accountant (CMA)",
        "Led team of 5 junior accountants",
        "Implemented new payroll management system"
      ]
    },
    {
      year: "2021",
      items: [
        "Accountant Certification",
        "Reduced account reconciliation time by 40%",
        "Successfully managed audit of 3 major clients"
      ]
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className='project-heading' style={{ paddingBottom: "20px" }}>
        Professional <strong className='orange'>Milestones</strong>
      </h1>
      
      <div className="timeline-container">
        {achievements.map((yearData, index) => (
          <div key={index} className="year-block">
            <h3 className="year-title">{yearData.year}</h3>
            <div className="achievement-cards">
              {yearData.items.map((item, itemIndex) => (
                <div key={itemIndex} className="achievement-card">
                  <div className="achievement-icon">
                    {itemIndex === 0 ? <FaCertificate /> : 
                     itemIndex === 1 ? <FaChartLine /> : 
                     <FaTrophy />}
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Row>
  );
}

export default ProfessionalAchievements;