import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

// Footer component

const MyFooter = () => {

  return (

    <footer className="bg-light py-3">

      <Container>

        <Row>

          <Col>

            <p className="text-muted">© 2025 Tamimi's Website. All rights reserved.</p>

          </Col>

        </Row>

      </Container>

    </footer>

  );

};

export default MyFooter;