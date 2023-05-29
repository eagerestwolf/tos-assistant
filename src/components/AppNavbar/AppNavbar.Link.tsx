import { createStyles, rem, Tooltip } from "@mantine/core";
import type { MantineTheme } from "@mantine/core";
import { NavLink } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const useStyles = createStyles((theme: MantineTheme) => ({
  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ color: theme.primaryColor, variant: "filled" }).background!,
        0.15
      )
    },
    opacity: 1
  },
  link: {
    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ color: theme.primaryColor, variant: "filled" }).background!,
        0.1
      ),
      opacity: 1
    },
    alignItems: "center",
    borderRadius: theme.radius.md,
    color: theme.white,
    display: "flex",
    height: rem(50),
    justifyContent: "center",
    opacity: 0.85,
    width: rem(50)
  }
}));

interface NavbarLinkProps extends LinkProps {
  icon: JSX.Element;
  label: string;
}

export function AppNavbarLink({ icon, label, to }: NavbarLinkProps): JSX.Element {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <NavLink
        className={({ isActive }) => {
          return cx(classes.link, { [classes.active]: isActive });
        }}
        to={to}
      >
        {icon}
      </NavLink>
    </Tooltip>
  );
}
