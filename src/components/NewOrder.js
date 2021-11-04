import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Button from "@mui/material/Button";
import moment from "moment";

const NewOrder = ({ addOrder }) => {
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
        <h1 className="title">הזמנה חדשה</h1>
        <div className="full_name">
          <div className="f_name">
            <h6>שם פרטי</h6>
            <TextField
              name="fname"
              className="text"
              id="outlined-basic"
              variant="outlined"
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
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="date_picker">
          <h6>תאריך</h6>
          <DatePickerComponent
            name="date"
            format="dd-MM-yyyy"
            onChange={handleChange}
          />
        </div>
        <Button
          onClick={() => addOrder(fname, lname, date)}
          className="addBtn"
          variant="contained"
        >
          הוספה
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
  .addBtn {
    width: 13rem;
  }
`;

export default NewOrder;
