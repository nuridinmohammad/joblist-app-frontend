import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ProfileComp from "../components/profile.comp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../app/features/auth/actions.auth";
import { logoutUser } from "../app/apis/auth.api";

const AccountPage = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    !auth.token && !auth.user && navigate("/login");
  }, [auth.token, auth.user, navigate]);

  return (
    <>
      {!auth.token && !auth.user ? null : (
        <div className="mt-5">
          <div className="card">
            <div className="card-header">Account</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md">
                  <Tab.Container
                    id="list-group-tabs-example"
                    defaultActiveKey="#profile"
                  >
                    <Row>
                      <Col md={3}>
                        <ListGroup>
                          <ListGroup.Item action href="#profile">
                            Profile
                          </ListGroup.Item>
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <ListGroup.Item
                              action
                              onClick={() => {
                                logoutUser()
                                  .then((res) => {
                                    alert(res.data.message);
                                    dispatch(userLogout());
                                  })
                                  .catch((err) => console.log(err));
                              }}
                            >
                              Logout
                            </ListGroup.Item>
                          </Link>
                        </ListGroup>
                      </Col>
                      <Col md={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="#profile">
                            <ProfileComp />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPage;
