import React from "react";
import { Card, Button } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import style from "./bootstrap-4.0.0-dist/css/bootstrap.min.css";

// * Add <MainCard... /> for adding a new card,
// * the rendering and postion will be automatically added,
// * Since its a single component no states are used.

function CardComponent() {
  return (
    <Carousel breakPoints={breakPoints} style={style}>
      <MainCard
        header="Peace"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="TITLE MAX"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />

      <MainCard
        header="Cards Header"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="TITLE QWE"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />

      <MainCard
        header="Cards Header"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="TITLE CHO"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />

      <MainCard
        header="Cards Header"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="TITLE MAW"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />
      <MainCard
        header="Cards Header"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="TITLE BAR"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />
      <MainCard
        header="Cards Header"
        cardText="Android is a mobile operating system based on a modified version of the Linux kernel and other open source software."
        cardTitle="TITLE FOO"
        cardFooter="Footer"
        image="https://androidcommunity.com/wp-content/uploads/2019/06/Android-Studio-64-bit.jpg"
      />
    </Carousel>
  );
}

// Card layout
const MainCard = (props) => (
  <div>
    <Card style={mainStyle} className="shadow-lg p-3 mb-5 bg-red rounded">
      <Card.Header style={cardStyle}>{props.header}</Card.Header>
      <Card.Img src={props.image} />

      <Card.Body style={bodyStyle}>
        <Card.Title style={{ color: "#D8F3DC" }}>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        <Button variant="success" href="https://www.android.com">
          Success
        </Button>
      </Card.Body>
      <Card.Footer style={cardStyle}>{props.cardFooter}</Card.Footer>
    </Card>
  </div>
);

// Styles
const mainStyle = {
  background: "black",
  width: "30vmax",
  textAlign: "center",
};
const cardStyle = { background: "#181C15", color: "#fff" };
const bodyStyle = { background: "#081C15", color: "#18D55E" };
const cardHover = {
  ransform: "scale(1.05)",
  boxShadow: "0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)",
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export default CardComponent;
