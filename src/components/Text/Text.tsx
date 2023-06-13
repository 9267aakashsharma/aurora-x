import React from "react";

type TextSizeVariants = "small" | "medium" | "large";

export interface TextProps {
  as?: React.ElementType;
  size?: TextSizeVariants;
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ children }) => {
  //   return React.createElement(
  //     as || "p",
  //     {
  //       className: `text-${size}`,
  //       styles: {
  //         ...styles,
  //       },
  //     },
  //     children
  //   );
  return <p>{children}</p>;
};

export default Text;

Text.defaultProps = {
  as: "p",
  size: "medium",
};
