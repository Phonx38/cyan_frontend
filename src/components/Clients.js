import { React, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCompanyList } from "../actions/companyActions";

const Clients = () => {
  //get data from store

  const dispatch = useDispatch();

  const companyLists = useSelector((state) => state.companyList);

  const { success, loading, companies } = companyLists;

  console.log(companies);

  useEffect(() => {
    dispatch(getCompanyList());
  }, [dispatch]);

  return (
    <div>
      <Container
        fluid
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "80%",
          margin: "20px auto",
          justifyContent: "center",
        }}
      >
        <Col>
          {companies.reverse().map((company) => (
            <Col key={company.id} style={{ marginTop: 20, marginBottom: 20 }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`update-company/${company.id}`}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>{company.company_name}</Card.Title>
                    <Row>
                      <Col>
                        <p>Type</p>
                        <h4>{company.company_type}</h4>
                      </Col>
                      <Col>
                        <p>Category</p>
                        <h4>{company.category}</h4>
                      </Col>
                      <Col>
                        <p>Budget</p>
                        <h4>{company.budget}</h4>
                      </Col>
                    </Row>
                    <Row style={{}}>
                      <p>
                        Contact: {company.name} at +91 {company.mobile_num}
                      </p>
                    </Row>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Col>
      </Container>
    </div>
  );
};

export default Clients;
