/* eslint-disable react-refresh/only-export-components */
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import { memo } from "react";
import { Link } from "react-router-dom";

const CardPositionsComp = ({ positions }) => {
  return (
    <>
      {positions
        ? positions.map((item) => (
            <div key={item._id}>
              <Card style={{ width: "16rem" }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.company}</Card.Text>
                  <Card.Text>Location: {item.location}</Card.Text>
                  <Card.Text>Type: {item.type || "-"} </Card.Text>
                </Card.Body>
                <Link to={`/detail/${item._id}`}>Detail</Link>
              </Card>
            </div>
          ))
        : null}
    </>
  );
};

export default memo(CardPositionsComp);

CardPositionsComp.propTypes = {
  positions: PropTypes.array,
};
