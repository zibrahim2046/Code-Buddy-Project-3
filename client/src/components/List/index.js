import React from "react";
import "./style.css"



export const List = ({ children }) => {
  return (
    <div className="list-overflow-container searched-books">
      <ul className="list-group">{children}</ul>
    </div>
  );
};

export const ListItem = props => (
  <li className="list-group-item">{props.children}</li>
  
);