import React, { useEffect, useState } from "react";
import NewOrder from "./NewOrder";
import UpdateOrder from "./UpdateOrder";
import Sidebar from "./Sidebar";
import { orders_list } from "../utils/constants";

const Content = () => {
  const [orders, setOrders] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [order, setOrder] = useState({});

  const addOrder = (fname, lname, date) => {
    console.log(fname, lname, date);
    const id = orders.length + 1;
    const text = `הזמנה ${id}`;
    const order = { id, text, fname, lname, date };
    setOrders([...orders, order]);
  };

  const closeOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
  };

  const editOrder = (order) => {
    setIsEditMode(true);
    setOrder(order);
  };

  const updateOrder = (fname, lname, date) => {
    console.log(fname, lname, date);
    const { id } = order;
    const newOrders = orders.map((order) => {
      if (order.id === id) {
        return {
          ...order,
          fname: fname,
          lname: lname,
          date: date,
        };
      } else return order;
    });
    setOrders(newOrders);
    setIsEditMode(false);
  };

  useEffect(() => {
    setOrders(orders_list);
  }, []);

  return (
    <div
      className="grid-container"
      style={{
        display: "grid",
        gridTemplateColumns: "10fr 1fr 1fr",
        gridGap: "20px",
      }}
    >
      {isEditMode ? (
        <div className="grid-child purple">
          <UpdateOrder updateOrder={updateOrder} order={order} />
        </div>
      ) : (
        <div className="grid-child purple">
          <NewOrder addOrder={addOrder} />
        </div>
      )}
      <div
        className="vl"
        style={{ borderLeft: "1px solid lightgrey", height: "800px" }}
      ></div>
      <div className="grid-child green">
        <Sidebar
          orders={orders}
          closeOrder={closeOrder}
          editOrder={editOrder}
        />
      </div>
    </div>
  );
};

export default Content;
