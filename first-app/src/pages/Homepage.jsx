import React from "react";
import { Container, Row } from "react-bootstrap";

import Newsletter from "../components/HomepageComponents/Newsletter";
import Jumbotron from "../components/HomepageComponents/Jumbotron";
import CardsSection from "../components/HomepageComponents/CardsSection";
import ProductsSection from "../components/HomepageComponents/ProductsSection";
import BlogBannerLink from "../components/HomepageComponents/BlogBannerLink";
import Team from "../components/HomepageComponents/Team";

export default function Homepage() {
  return (
    <Container id="home" fluid>
      <Row>
        <Jumbotron />
        <CardsSection />
        <ProductsSection />
        <Newsletter />
        <BlogBannerLink />
        <Team />
      </Row>
    </Container>
  );
}


