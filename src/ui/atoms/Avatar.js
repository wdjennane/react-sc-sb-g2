import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const sizes = {
  small: "30",
  medium: "36",
  large: "120",
};

const getSize = (size) => {
  if (!size) {
    return `${sizes.small}px`;
  }

  return Object.entries(sizes)
    .filter(([key, value]) => key === size)
    .map(([key, value]) => `${value}px`);
};

const getAvatar = (uuid) => {
  return `https://static-cdn.jtvnw.net/jtv_user_pictures/${uuid}-profile_image-150x150.png`;
};

const AvatarWrapper = styled.img`
  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};
  border-radius: 50%;
  filter: ${({ disabled }) => disabled && "grayscale(100%) contrast(85%)"};
`;

const Avatar = ({ uuid, username, size, disabled }) => {
  return (
    <AvatarWrapper
      src={getAvatar(uuid)}
      alt={username}
      size={size}
      disabled={disabled}
    />
  );
};

Avatar.propTypes = {
  uuid: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  disabled: PropTypes.bool,
};

Avatar.defaultProps = {
  size: "small",
  disabled: false,
};

export default Avatar;
