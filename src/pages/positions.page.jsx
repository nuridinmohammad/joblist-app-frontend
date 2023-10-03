/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardPositionsComp from "../components/card-positions.comp";
import { useNavigate } from "react-router-dom";
import { getPositionsByDescription } from "../app/apis/positions.api";

function PositionsPage() {
  const auth = useSelector((state) => state.auth);
  const [positions, setPositions] = useState([]);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    !auth.token && !auth.user && navigate("/login");
  }, [auth.token, auth.user, navigate]);

  useEffect(() => {
    getPositionsByDescription(description)
      .then((res) => {
        setPositions(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [description]);

  return (
    <div className="container">
      <div className="row mt-3">
        <Form className="d-flex gap-3 justify-content-center align-items-center">
          <div className="col-md-12">
            <div className="input-group mt-2">
              <input
                className="bg-transparent form-control border border-1 text-dark"
                placeholder="Cari job description"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </Form>
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center gap-3 ">
        {positions.length ? <CardPositionsComp positions={positions} /> : ""}
      </div>
    </div>
  );
}

export default PositionsPage;
