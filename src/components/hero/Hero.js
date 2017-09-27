import React, { Component } from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
            <img src="http://cdn.clcworld.com/wp-content/uploads/2016/08/31113857/clcworldtravel_hero_image02.jpg"/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://i.warosu.org/data/fa/img/0089/31/1413050397565.jpg"/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://jellyjourneys.com/wp-content/uploads/2017/09/hero_img_blog_jelly-hk-1_no-text-2000x667.jpg"/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://jellyjourneys.com/wp-content/uploads/2017/09/hero_img_blog_jelly-philippines-island-hopping-1_no-text-2000x667.jpg"/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h3>Here are some places I would like to visit</h3>            </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    );
  }
}

export default Hero;