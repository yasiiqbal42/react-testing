import React from "react";

type greetProps = {
  name?: string;
};

export default function Greets(props: greetProps) {
  return <div>Hello {props.name}</div>;
}
