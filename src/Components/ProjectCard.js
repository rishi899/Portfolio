import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, goto }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={goto} target="_blank" rel="noopener noreferrer">
            <button>Visit Website</button>
          </a>
        </div>
      </div>
    </Col>
  );
};
