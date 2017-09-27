import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={10} md={8}>
                    <Thumbnail src={this.props.imgsrc} alt="242x200">
                        <h3>{this.props.country}</h3>
                        <p>Description</p>
                        <a href={this.props.website} target="_blank">{this.props.linktext}</a>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default Cards;