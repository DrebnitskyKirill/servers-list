import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServerName, setServerType } from "../../store/current-data/actions";
import { updateServer } from "../../store/data/actions";
import { getCurrentServer } from "../../store/current-data/selectors";
import styles from "@/styles/Home.module.css";

const Form = () => {
  const { currentServer } = useSelector(getCurrentServer);
  const dispatch = useDispatch();
  const serverForm = useRef();

  const {
    customer_id: customerId,
    server_name: serverName,
    server_type: serverType,
  } = currentServer;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const inputField = serverForm.current.querySelector("#server_name");
    const selectField = serverForm.current.querySelector("#server_type");
    dispatch(setServerName(inputField.value));
    dispatch(setServerType(selectField.value));
    dispatch(
      updateServer({
        customer_id: customerId,
        server_name: inputField.value,
        server_type: selectField.value,
      })
    );
  };

  return (
    <div className={styles.form}>
      <div className="card-panel teal">
        <form ref={serverForm} onSubmit={handleFormSubmit}>
          <h5 className="white-text">Server information</h5>
          {customerId && (
            <div className="white-text">
              {customerId} <span className="white-text">(customer id)</span>
            </div>
          )}
          {serverName && (
            <div className="white-text">
              {serverName} <span className="white-text">(server name)</span>
            </div>
          )}
          {serverType && (
            <div className="white-text">
              {serverType} <span className="white-text">(server type)</span>
            </div>
          )}
          <div className="mt-3">
            <h5 className="white-text" htmlFor="server_name">
              Server name
            </h5>
            <input
              className="white-text"
              id="server_name"
              name="server_name"
              type="text"
              required="required"
              placeholder="Server name"
              aria-label="Server name"
              autoComplete="off"
            />
          </div>
          <div className="row">
            <h5 className="white-text" htmlFor="server_type">
              Server type
            </h5>
            <select
              className="browser-default"
              required="required"
              name="server_type"
              id="server_type"
              defaultValue={""}
            >
              <option value="" disabled selected>
                Choose server type
              </option>
              <option value="vds">vds</option>
              <option value="dedicated">dedicated</option>
              <option value="hosting">hosting</option>
            </select>
          </div>
          <div className="flex mt-3">
            <button className="waves-effect waves-light btn" type="submit">
              Save
            </button>
            <button className="waves-effect waves-light btn red" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
