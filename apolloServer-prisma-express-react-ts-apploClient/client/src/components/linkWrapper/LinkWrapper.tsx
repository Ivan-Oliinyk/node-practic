import React from "react";
import { Link } from "react-router-dom";
import { FlexProps } from "../flex/FlexTypes";
import { LinkWrapperStyles } from "./LinkWrapperStyles";

type LinkProps = {
  to: string;
};

const LinkWrapper: React.FC<LinkProps & FlexProps> = ({
  children,
  ...props
}) => {
  return (
    <LinkWrapperStyles {...props}>
      <Link to={props.to}>{children}</Link>
    </LinkWrapperStyles>
  );
};

export default LinkWrapper;
