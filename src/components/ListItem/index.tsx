import React from "react";
import { Container } from "./styles";
interface ListItemProps {
  text: string;
  checkValue: boolean;
  setCheck: (newVal: boolean) => void;
}
export function ListItem(props: ListItemProps) {
  return (
    <Container>
      <input
        type={"checkbox"}
        checked={props.checkValue}
        onChange={(event) => {
          props.setCheck(event.target.checked);
        }}
      />
      <p>{props.text}</p>
    </Container>
  );
}
