import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[7]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding: 0.75rem 0;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.violet &&
    css`
      background: ${palette.violet[8]};

      &:hover {
        background: ${palette.violet[6]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} violet={props.violet ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
