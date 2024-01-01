import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditUser({ user, setUser }) {
  let params = useParams();
  let navigate = useNavigate();

  const findIndex = (id) => {
    for (let i = 0; i < user.length; i++) {
      if (id === user[i].id) return i;
    }
  };

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");

  const getUserData = () => {
    let id = Number(params.id);
    let index = findIndex(id);

    setName(user[index].name);
    setEmail(user[index].email);
    setMobile(user[index].mobile);
    setBatch(user[index].batch);
  };
  //useEffect to pre-populate user info
  useEffect(() => {
    getUserData();
  }, []);

  const editUser = () => {
    let id = Number(params.id);
    let index = findIndex(id);
    let newUserArray = [...user];

    newUserArray.splice(index, 1, {
      id,
      name,
      email,
      mobile,
      batch,
    });

    setUser(newUserArray);
    navigate("/dashboard");
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <h1>EditUser</h1>
        <br />
        <div id="content">
          <div className="container-fluid">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mobile Num"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Batch"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => editUser()}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
