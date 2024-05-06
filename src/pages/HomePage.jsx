import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-vh-100 putih ">
      <Container className="header-page rounded p-2 ">
        <Row>
          <Col lg="12" className=" d-flex justify-content-center">
            <p>Senin, 6 Mei 2024 I Selamat sore, kawan</p>
          </Col>
          <Col>
            <h3 className="text-center" lg="12">
              Cari Berdasarkan Nomor Induk Siswa
            </h3>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Input NISN</Form.Label>
            <Form.Control type="number" placeholder="Input NISN" />
            <Form.Text className="text-muted">Number only.</Form.Text>
          </Form.Group>
          <Link to="/lulus" className="btn btn-success">
            Submit
          </Link>
        </Form>
      </Container>
    </div>
  );
};
export default HomePage;
