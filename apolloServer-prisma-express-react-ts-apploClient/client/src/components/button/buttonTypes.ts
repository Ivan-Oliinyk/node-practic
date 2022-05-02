export interface ButtonStyledProps {
  width?: string;
  padding?: string;
  margin?: string;
  color?: string;
  bg?: string;
  textAlign?: string;
  type?: "button" | "submit" | "reset" | undefined;
  borderRadius?: string;
  fontSize?: string;
  border?: string;
  cursor?: string;
  disabled?: boolean;
}

export interface ButtonProps extends ButtonStyledProps {
  click?: any;
  link?: string;
}
