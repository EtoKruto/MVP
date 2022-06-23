import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Dropdown from './Dropdown';

function Choice_Grid({
  choiceResults,
  filter,
  handleChange,
  handleClick,
}: any) {
  return (
    <div className="section">
      <h1> OK Let’s choose this one (Please select up to 3) </h1>
      <div className="top-container" style={{ display: 'flex' }}>
        <h3 style={{ marginRight: 20 }}> How about a fitler? </h3>
        <Dropdown
          options={[
            { label: 'Rating', value: 'rating' },
            { label: 'Distance', value: 'distance' },
            // { label: 'Price', value: 'price' },
          ]}
          value={filter}
          onChange={handleChange}
        />
      </div>
      <div className="main-container">
        <Container style={{ height: 500, overflow: 'overlay' }}>
          <Row>
            {choiceResults.map((choiceResult: any) => (
              <Col key={choiceResult.id} xs={12} md={4} lg={3}>
                <Card
                  style={{ marginBottom: 20, borderRadius: 20 }}
                  onClick={() => handleClick(choiceResult.id)}
                >
                  <Card.Img src={choiceResult.image_url} />

                  <Card.Body>
                    <Card.Title>{choiceResult.name}</Card.Title>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {Math.round(choiceResult.distance * 0.0006 * 100) / 100}{' '}
                      miles away
                    </Card.Text>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {choiceResult.price}
                    </Card.Text>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {choiceResult.rating + ' stars'}
                      <Card.Text
                        as="div"
                        style={{ fontSize: 12, minHeight: 20 }}
                      >
                        Based on {choiceResult.review_count} reviews
                      </Card.Text>
                    </Card.Text>
                    <Card.Text as="div" style={{ fontSize: 12, minHeight: 20 }}>
                      {choiceResult.display_phone}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <h4>
        When Done, Press Submit to go the next step(this initiates the API
        search)
      </h4>
      <button type="submit">Continue</button>
    </div>
  );
}

export default Choice_Grid;

//   <div className="left-container">
//   <h3>Scroll and Add</h3>
// </div>

// <div className="right-container" style={{ minWidth: 400 }}>
//   <h3>Picked</h3>
// </div>
