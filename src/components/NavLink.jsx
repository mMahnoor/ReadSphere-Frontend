import { forwardRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

/**
 * Simple utility to combine class names
 * Skips falsy values like undefined or null
 */
const classNames = (...classes) => classes.filter(Boolean).join(" ");

const NavLink = forwardRef(
  (
    {
      className,
      activeClassName = "text-primary font-bold",
      pendingClassName = "text-muted",
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          classNames(
            "px-4 py-2 rounded transition-colors", // default Tailwind styling
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
