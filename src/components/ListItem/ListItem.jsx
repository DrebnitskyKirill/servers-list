import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentServer } from "../../store/current-data/actions";
import { deleteServer } from "@/store/data/actions";

const ListItem = ({ server }) => {
  const {
    customer_id: customerId,
    server_name: serverName,
    server_type: serverType,
  } = server;
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(getCurrentServer(server));
  };
  const handleDeleteClick = () => {
    dispatch(deleteServer(server));
  };
  return (
    <li>
      <div className="card-panel teal">
        {customerId && (
          <div className="white-text">
            {customerId}
            <span className="white-text"> (customer id)</span>
          </div>
        )}
        {serverName && (
          <div className="white-text">
            {serverName}
            <span className="white-text"> (server name)</span>
          </div>
        )}
        {serverType && (
          <div className="white-text">
            {serverType}
            <span className="white-text"> (server type)</span>
          </div>
        )}
      </div>
      <button
        className="waves-effect waves-light btn"
        type="button"
        onClick={handleEditClick}
      >
        edit
      </button>
      <button
        className="waves-effect waves-light btn red"
        type="button"
        onClick={handleDeleteClick}
      >
        delete
      </button>
    </li>
  );
};

export default ListItem;
