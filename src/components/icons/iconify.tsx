import PropTypes from "prop-types";
import React, { forwardRef, ForwardedRef } from "react";
import { Icon } from "@iconify/react";

import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

type IconifyProps = {
  icon: React.ReactElement | string;
  sx?: React.CSSProperties;
  width?: number;
};

const Iconify = forwardRef(function Iconify(
  { icon, width = 20, sx, ...other }: IconifyProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon as string} // Cast 'icon' prop to string
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
});

Iconify.propTypes = {
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
