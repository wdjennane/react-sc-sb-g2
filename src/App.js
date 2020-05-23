import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import Avatar from "./ui/atoms/Avatar";

export default function App() {
  return (
    <div className="App">
      <Avatar
        uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
        username="Squeezzielive"
        size="small"
        status="online"
      />
      <Avatar
        uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
        username="Squeezzielive"
        size="medium"
        status="absent"
      />
      <Avatar
        uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
        username="Squeezzielive"
        size="large"
        disabled
      />
      <Badge text="IRL" color={colors.purple} />
      <Badge text="IRL" color={colors.grey} />
    </div>
  );
}
