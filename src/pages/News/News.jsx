import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsCard from "./EditorsCard";

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id, author, rating, total_view } = news;

  return (
    <div>
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/:id ${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> All Details News Some one</Button></Link>
      </Card.Body>
    </Card>
    <div>
         <EditorsCard></EditorsCard>
    </div>
    </div>
  );
};

export default News;
