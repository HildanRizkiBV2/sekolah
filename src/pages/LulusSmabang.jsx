import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../assets/logo/image.png";
import Foto from "../assets/image/image.png";
export const LulusSmabang = () => {
  return (
    <div className="min-vh-100 background-page ">
      <Container className="header  p-2 ">
        <Row>
          <Col lg="1" className=" d-flex justify-content-center">
            <img src={Logo} alt="" />
          </Col>
          <Col className="smabang mt-2" lg="11">
            <p>
              <span>SMA N 1 LIMBANGAN</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="isi">
        <Row className="p-4">
          <Col className="anj" lg="10">
            <h1>Hildan Rizki Bayhaqi</h1>
            <p> NISN : 0065979746</p>
            <p> NIS : 2122103412</p>
          </Col>

          <Col>
            <img src={Foto} lg="2" alt="" className="img-fluid " />
          </Col>
        </Row>
        <Row className="isinya  ">
          <Col lg="10">
            <h1>Maaf anda tidak lulus</h1>
          </Col>
          <Col lg="2">
            <Button className="btn btn-danger ">Penggunguman</Button>
            <Button className="btm btn-scondary ">Print</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LulusSmabang;
