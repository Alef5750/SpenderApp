import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
//styles

import CategoryCard from "./CategoryCard";

export default function CategoriesGrid(props) {
  //   const [redirect, setDirect] = useState(null);
  //   if (redirect) {
  //     return <Redirect to={redirect} />;
  //   }
  return (
    <Container>
      <Row>
        <Col>
          <CategoryCard />
          <CategoryCard />
        </Col>
        <Col>
          {" "}
          <CategoryCard />
        </Col>
      </Row>
      {/* // className="d-flex flex-row mx-4 px-1 mt-5 justify-content-between"> */}
    </Container>
  );
}
