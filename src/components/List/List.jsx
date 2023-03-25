import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";
import { getServers } from "../../store/data/selectors";

const List = () => {
  const { servers } = useSelector(getServers);
  return (
    <section>
      <ul>
        {servers.map((server, id) => (
          <ListItem key={id} server={server} />
        ))}
      </ul>
    </section>
  );
};

export default List;
