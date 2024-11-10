import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
function ProjectCards(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title>{props.title} <span style={{fontSize: '12px'}}>({props.createdAt})</span></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant='primary'
          href={props.code}
          target='_blank'
          className='m-2'
        >
          <AiFillGithub /> &nbsp;
          {props.isBlog ? "View Blog" : "View Code"}
        </Button>
        <Button variant='primary' href={props.link} target='_blank'>
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
