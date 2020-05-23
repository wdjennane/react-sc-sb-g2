import React from "react";
import Avatar, { sizes } from "../ui/atoms/Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Small = () => (
  <Avatar
    uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
    username="Squeezzielive"
  />
);

export const Medium = () => (
  <Avatar
    uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
    username="Squeezzielive"
    size="medium"
  />
);

export const Large = () => (
  <Avatar
    uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
    username="Squeezzielive"
    size="large"
  />
);

export const Disabled = () => (
  <Avatar
    uuid="992dd0b4-a5ca-4fff-b3ce-c64ea2d5f808"
    username="Squeezzielive"
    size="large"
    disabled
  />
);
