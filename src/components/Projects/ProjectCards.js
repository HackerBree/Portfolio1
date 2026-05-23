import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{
        width: "100%",
        height: "220px",
        overflow: "hidden",
      }}>
        <img
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <Button
            href={props.writeupLink}
            target="_blank"
            style={{
              backgroundColor: "#c770f0",
              border: "2px solid #c770f0",
              color: "white",
              transition: "all 0.3s ease",
              fontWeight: "bold",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#c770f0";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "#c770f0";
              e.currentTarget.style.color = "white";
            }}
          >
            View Project
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
