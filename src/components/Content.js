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
    let id = "";
    let title = "";
    if (orders.length < 1) {
      id = 1; // end case where the list is empty
      title = `הזמנה ${id}`;
    } else {
      id = orders[orders.length - 1].id + 1; // always check what the last index is actually and not what the length of the list, to avoid glitches in deleting an order
      title = `הזמנה ${id}`;
    }
    const order = { id, title, fname, lname, date };
    setOrders([...orders, order]);
  };

  const closeOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
  };

  // let us know that we're in the editing mode to render update component
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
    setIsEditMode(false); // after the update return to new order mode
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
      {/* toggle between NewOrder and UpdateOrder components */}
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
