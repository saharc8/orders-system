import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const Sidebar = ({ orders, closeOrder, editOrder }) => {
  console.log(orders);
  return (
    <Wrapper>
      <h2>רשימת הזמנות</h2>
      <h3>מספר הזמנות: {orders.length}</h3>
      <div className="orders">
        {orders.map((order) => {
          return (
            <Card key={order.id} className="orders_list" sx={{ minWidth: 275 }}>
              <button
                type="button"
                className="closeBtn"
                onClick={() => closeOrder(order.id)}
              >
                <CloseIcon />
              </button>
              <button
                type="button"
                className="editBtn"
                onClick={() => editOrder(order)}
              >
                <EditIcon />
              </button>
              <CardContent>
                <Typography variant="h5" component="div">
                  {order.text}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  פרטים
                </Typography>
                <Typography variant="body2">
                  {order.fname} {order.lname}
                  <br />
                  {order.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">See More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;
  text-align: right;
  direction: rtl;
  .orders_list {
    margin: 20px;
    border-radius: 20px;
  }
  .closeBtn {
    margin: 8px;
    float: left;
    cursor: pointer;
    border-style: none;
    background-color: white;
  }
  .editBtn {
    margin: 8px;
    float: left;
    cursor: pointer;
    border-style: none;
    background-color: white;
  }
`;

export default Sidebar;
