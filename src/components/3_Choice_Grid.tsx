import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Dropdown from './Dropdown';

function Choice_Grid({
  choiceResults,
  filter,
  handleChange,
  handleClick,
  players,
  page3Choices,
}: any) {
  return (
    <div className="section">
      <h1>
        {' '}
        <span style={{ fontSize: '5vh' }}>
          {' '}
          {players[1] || 'Person 2'}{' '}
        </span>{' '}
        please select up to 3 places by clicking on the card{' '}
      </h1>
      <div
        className="top-container"
        style={{ display: 'flex', alignItems: 'baseline' }}
      >
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
        <Container
          style={{
            height: 600,
            overflow: 'overlay',
            padding: 50,
            color: 'black',
          }}
        >
          <Row>
            {choiceResults.map((choiceResult: any) => (
              <Col key={choiceResult.id} xs={12} md={4} lg={3}>
                <Card
                  style={{ marginBottom: 20, borderRadius: 20 }}
                  onClick={() => handleClick(choiceResult.id)}
                >
                  <Card.Img
                    src={choiceResult.image_url}
                    style={{
                      marginBottom: 20,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 50,
                      borderTopRightRadius: 50,
                    }}
                  />

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
      <div style={{ padding: 20 }}>
        {page3Choices.map(
          (pickedChoices: any, index: number) =>
            `${index + 1}. ${pickedChoices.name} `,
        )}
      </div>

      <h4>Click Below when Done Choosing</h4>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (page3Choices.length > 0) {
            setTimeout(() => {
              window.location.href = '#Final_Choice';
            }, 500);
          } else {
            alert('Please pick at least one!');
          }
        }}
      >
        Continue
      </button>
      <button type="submit" onClick={() => handleClick(null, 'reset')}>
        Reset Choices
      </button>
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
