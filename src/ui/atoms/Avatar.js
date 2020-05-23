import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const sizes = {
  small: "30",
  medium: "36",
  large: "40",
};

const presences = {
  online: Colors.status_online,
  offline: Colors.status_offline,
  absent: Colors.status_absent,
};

const getSize = (size) => {
  if (!size) {
    return `${sizes.small}px`;
  }

  return Object.entries(sizes)
    .filter(([key, value]) => key === size)
    .map(([key, value]) => `${value}px`);
};

const getPressence = (presence) => {
  return Object.entries(presences)
    .filter(([key, value]) => key === presence)
    .map(([key, value]) => value);
};

const getAvatar = (uuid) => {
  return `https://static-cdn.jtvnw.net/jtv_user_pictures/${uuid}-profile_image-150x150.png`;
};

const AvatarWrapper = styled.div`
  position: relative;
  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};
  filter: ${({ disabled }) => disabled && "grayscale(100%) contrast(85%)"};
`;

const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const AvatarStatus = styled.span`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => getPressence(status)};
  bottom: 0;
  right: 0;
  border: 2px solid #fff;
`;

const Avatar = ({ uuid, username, size, disabled, status }) => (
  <AvatarWrapper size={size} disabled={disabled}>
    <AvatarImage src={getAvatar(uuid)} alt={username} />
    {status && <AvatarStatus status={status} />}
  </AvatarWrapper>
);

Avatar.propTypes = {
  uuid: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(sizes)),
  status: PropTypes.oneOf(Object.keys(presences)),
};

Avatar.defaultProps = {
  size: "small",
  disabled: false,
};

export default Avatar;
