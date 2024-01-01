import React from "react";
import Card from "./Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Dashboard({ user, setUser }) {

  let navigate = useNavigate()
  let cardData = [
    {
      title: "EARNINGS (MONTHLY)",
      content: "$40,000",
      isProgress: false,
      color: "primary",
      icon: "fa-calendar",
    },
    {
      title: "EARNINGS (ANNUAL)",
      content: "$215,000",
      isProgress: false,
      color: "success",
      icon: "fa-dollar-sign",
    },
    {
      title: "TASKS",
      content: "50",
      isProgress: true,
      color: "info",
      icon: "fa-clipboard-list",
    },
    {
      title: "PENDING REQUESTS",
      content: "18",
      isProgress: false,
      color: "warning",
      icon: "fa-comments",
    },
  ];

  let deleteUser = (id) => {
    let index = 0;
    for (let i = 0; i < user.length; i++) {
      if (user[i].id == id) {
        index = i;
        break;
      }
    }

    let newUserArray = [...user]; //deep copy of user
    newUserArray.splice(index, 1); // splice--->  (indexvalue,noOfDelvAriables)
    setUser(newUserArray);
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
              {cardData.map((ele, i) => {
                return <Card data={ele} key={i}></Card>;
              })}
            </div>

            <div className="row">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile no</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((e) => {
                    return (
                      <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                        <td>{e.batch}</td>
                        <td>
                          <Button variant="primary" onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>{" "}
                          &nbsp;
                          <Button
                            variant="danger"
                            onClick={() => deleteUser(e.id)}
                          >
                            Delete
                          </Button>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
