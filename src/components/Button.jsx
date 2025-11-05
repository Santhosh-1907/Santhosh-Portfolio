import React from "react";

export default function Button({ as = "a", href = "#", variant = "primary", children, ...rest }) {
  const Comp = as;
  const cls = variant === "ghost" ? "btn-ghost" : "btn-primary";
  return (
    <Comp href={href} className={cls} {...rest}>
      {children}
    </Comp>
  );
}
