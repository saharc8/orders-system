import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Button from "@mui/material/Button";
import moment from "moment";

const UpdateOrder = ({ updateOrder, order }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.name) {
      case "fname":
        setFname(e.target.value);
        break;
      case "lname":
        setLname(e.target.value);
        break;
      case "date":
        const date = moment(e.target.value).format("DD-MM-YYYY");
        console.log(date);
        setDate(date);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <div className="content">
        <h1 className="title">הזמנה {order.id}</h1>
        <div className="full_name">
          <div className="f_name">
            <h6>שם פרטי</h6>
            <TextField
              name="fname"
              className="text"
              id="outlined-basic"
              variant="outlined"
              placeholder={order.fname}
              onChange={handleChange}
            />
          </div>
          <div className="l_name">
            <h6>שם משפחה</h6>
            <TextField
              name="lname"
              className="text"
              id="outlined-basic"
              variant="outlined"
              placeholder={order.lname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="date_picker">
          <h6>תאריך</h6>
          <DatePickerComponent
            name="date"
            format="dd-MM-yyyy"
            placeholder={order.date}
            onChange={handleChange}
          />
        </div>
        <Button
          onClick={() => updateOrder(fname, lname, date)}
          className="updateBtn"
          variant="contained"
        >
          עדכון
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;
  text-align: right;
  direction: rtl;
  .title {
    font-size: 30px;
  }
  .full_name {
    display: flex;
    margin-bottom: 20px;
  }
  .f_name {
    margin-left: 30px;
  }
  .date_picker {
    width: 13rem;
    margin-bottom: 50px;
  }
  .updateBtn {
    width: 13rem;
  }
`;

export default UpdateOrder;
