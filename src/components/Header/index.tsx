import React from "react";
import { Container, Title } from "./styles";
interface HeaderProps {
  title: string;
}
export function Header(props: HeaderProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
}
