import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {

    const cardInfo = [
        { image:"https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402_960_720.jpg", title: " Savory Tacos ", text:" State of the are Tacos", link: "/tacos" },
        { image:"https://cdn.pixabay.com/photo/2016/08/10/10/27/pork-1582916_960_720.jpg", title: " Delicious Korean Food ", text:" Korean Yum yums ", link: "/korean" },
        { image:"https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_960_720.jpg", title: " Sweet Savory Bbq ", text:" Saucy Saucy ",link: "/bbq" },
        { image:"https://cdn.pixabay.com/photo/2017/03/23/15/48/buffet-2168675_960_720.jpg", title: " More Savory Delicious Sweet Food ", text:" What you want is out there!! ", link: "/" },

    ]

    const renderCard = (card, index) => {
        return(
          <div>
            <style>
              {
                `.cardButton{
                    width: 100%;
                  }`
              }
            </style>
            <Card style={{ width: "18rem"}} key = {index} className="box">
            <CardImg className="cardImg"   src={card.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
              <Button className="cardButton" href={card.link} > Order Now </Button>
            </CardBody>
          </Card>
          </div>
        )
    }


  return (
    <div className="grid">
    {cardInfo.map(renderCard)}
    </div>
  );
};

export default Cards;
