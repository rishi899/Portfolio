import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Football_player_tracking from "../assets/img/Football_player_tracking.png";
import activitytracker from "../assets/img/activity.png";
import JA from "../assets/img/JA.png";
import twjp from "../assets/img/Three-water-jug.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ems from "../assets/img/ems.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Projects = () => {

  const projectsTab1 = [
    {
      title: "Football Analysis",
      description: "Football player detection and tracking using YOLOv5",
      imgUrl: Football_player_tracking,
      goto: "https://github.com/rishi899/Football-Player-detection-and-tracking-in-a-video-clip-"
    },
    {
      title: "Employee Management System",
      description: "The Employee Management System is a robust application designed to streamline and enhance the management of employee records. ",
      imgUrl: ems,
      goto: "https://github.com/rishi899/EmployeeManagementSystem"
    },
    {
      title: "Three water jug problem",
      description: "basic frontend UI for three water jug problem",
      imgUrl: twjp ,
      goto: "https://github.com/rishi899/Three-Water-Jug/"
    }
  ];

  const projectsTab2 = [
    {
      title: "Activity tracker",
      description: "A Chrome extension to track all activites inorder to analyze your time spend on each website",
      imgUrl: activitytracker,
      goto: "https://github.com/rishi899/activity-tracker"
    },
    {
      title: "Daily Journal App",
      description: "This journal application provides a platform for users to create, manage, and access their personal journal entries.",
      imgUrl: JA,
      goto: "https://github.com/rishi899/Journal-App"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here is a list of projects that I have made with the skills that I have learnt through my journey of Web Development.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectsTab1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsTab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}

export default Projects;