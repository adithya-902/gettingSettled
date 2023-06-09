import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
//import PersonIcon from '@mui/icons-material/Person';

const ExpenseForm = (props) => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleSelectedRadio = (event) => setSelectedRadio(event.target.value);

  const handleRadio = (event) => {
    props.handleRadio(event);
    handleSelectedRadio(event);
  };

  const splitExpenses = (event) => {
    event.preventDefault();
    props.splitExpenses();
    setSelectedRadio("");
    document.getElementById("FirstForm").reset();
    document.getElementById("SecondForm").reset();
    document.getElementById("ThirdForm").reset();
  };

  return (
    <Container className="split">
      <Row>
        <Col>
          <Card>
            <Form onSubmit={props.handleFirst} id="FirstForm">
              <center>
                <h4 className="one">1</h4>
              </center>
              <Form.Control
                onChange={props.handleExpName}
                placeholder="Create an event"
                required
              />
              <Form.Control onChange={props.handleDate} type="date" required />
              <center>
                <Button title="Name your thing" type="submit">
                  Add your event
                </Button>
              </center>
            </Form>
          </Card>
        </Col>

        <Col>
          <Card>
            <Form onSubmit={props.handleSecond} id="SecondForm">
              <center>
                <h4 className="two">2</h4>
              </center>
              {props.members.map((member, index) => {
                return (
                  <div className="addPerson" key={index}>
                    <Form.Control
                      placeholder="Person Name"
                      onChange={(event) => props.handleMember(event, index)}
                      required
                    />
                    <i
                      className="material-icons minusBtn"
                      title="delete member"
                      onClick={() => props.removeMember(index)}
                    >
                      <DeleteIcon />
                    </i>
                  </div>
                );
              })}
              <center>
                <i
                  className="material-icons addBtn"
                  title="add member"
                  onClick={(event) => props.addMember(event)}
                >
                  <AddCircleIcon />
                </i>
              </center>
              <center>
                <Button title="form group" type="submit">
                  Make your group
                </Button>
              </center>
            </Form>
          </Card>
        </Col>

        <Col>
          <Card>
            <Form onSubmit={props.addExpenseToInfoCard} id="ThirdForm">
              <center>
                <h4 className="three">3</h4>
              </center>
              <Form.Control
                onChange={props.handleAmount}
                placeholder="Amount"
                required
              />
              <Row style={{ color: "#003B73", fontWeight: 600 }}>By whom</Row>
              <Row>
                {props.members.map((member, index) => {
                  return (
                    <Col key={index}>
                      <Form.Check
                        type="radio"
                        checked={selectedRadio === member.name}
                        value={member.name || ""}
                        label={member.name}
                        onChange={(event) => handleRadio(event)}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row style={{ color: "#003B73", fontWeight: 600 }}>To whom</Row>
              <Row>
                {props.to_whom.map((member, index) => {
                  return (
                    <Col key={index}>
                      <Form.Check
                        type="checkbox"
                        label={member.name}
                        checked={member.isChecked}
                        value={member.name || ""}
                        onChange={(event) => props.handleCheckbox(event, index)}
                      />
                    </Col>
                  );
                })}
              </Row>
              <center>
                <i
                  className="material-icons addBtn"
                  title="add more expense"
                  onClick={(event) => props.addExpenseModal(event)}
                >
                  <AddCircleIcon />
                </i>
              </center>
              <center>
                <Button title="add the expenses" type="submit">
                  Add the expenses
                </Button>
              </center>
            </Form>
          </Card>
        </Col>
      </Row>
      <center>
        <Button
          title="Split the expenses"
          className="split_btn"
          onClick={splitExpenses}
        >
          Finally, SETTLE
        </Button>
      </center>
    </Container>
  );
};

export default ExpenseForm;
