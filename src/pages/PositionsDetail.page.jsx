/* eslint-disable react-refresh/only-export-components */
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import imageDummy from "../assets/react.svg";
import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPositionsById } from "../app/apis/positions.api";
import { useSelector } from "react-redux";

const PositionsDetailPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    !auth.token && !auth.user && navigate("/login");
  }, [auth.token, auth.user, navigate]);

  useEffect(() => {
    getPositionsById(id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="mt-3">
        <Card style={{ width: "auto" }}>
          <div className="row d-flex justify-content-center items-center">
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Card.Text>{data.company}</Card.Text>
                <Card.Text>company : {data.company_url || "-"}</Card.Text>
                <Card.Text>Location: {data.location}</Card.Text>
                <Card.Text>Type: {data.type || "-"} </Card.Text>
                <Card.Text>Apply: {data.how_to_apply || "-"} </Card.Text>
                <Card.Text>Job url : {data.url || "-"} </Card.Text>
              </Card.Body>
            </div>
            <div className="col-md-4 d-flex justify-content-center items-center">
              <Card.Img
                style={{ width: "8rem" }}
                src={data.company_logo || imageDummy}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default memo(PositionsDetailPage);

PositionsDetailPage.propTypes = {
  positions: PropTypes.object,
};
