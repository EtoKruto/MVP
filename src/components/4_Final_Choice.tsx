import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

interface AppProps {}

function Final_Choice({ page3Choices }: any) {
  return (
    <div className="section">
      <h1> PERSON 1 - Please Select the final choice </h1>
      <div className="top-container" style={{ display: 'flex' }}></div>
      <div className="main-container">
        <Container style={{ height: 500, overflow: 'overlay' }}>
          <Row>
            {(page3Choices).map((page3result: any) => (
              <Col key={page3result.id} xs={12} md={4} lg={3}>
                <Card
                  style={{ marginBottom: 20, borderRadius: 20 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '#Fireworks';
                  }}
                >
                  <Card.Img src={page3result.image_url} />

                  <Card.Body>
                    <Card.Title>{page3result.name}</Card.Title>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {Math.round(page3result.distance * 0.0006 * 100) / 100}{' '}
                      miles away
                    </Card.Text>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {page3result.price}
                    </Card.Text>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {page3result.rating + ' stars'}
                      <Card.Text
                        as="div"
                        style={{ fontSize: 12, minHeight: 20 }}
                      >
                        Based on {page3result.review_count} reviews
                      </Card.Text>
                    </Card.Text>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {page3result.display_phone}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Final_Choice;
