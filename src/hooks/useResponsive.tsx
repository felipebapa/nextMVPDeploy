import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * A custom React hook that provides responsive utility functions based on Material-UI's breakpoints.
 *
 * @param query - The type of responsive query to perform. Can be one of "up", "down", "between", or "only".
 * @param start - The starting breakpoint for the responsive query.
 * @param end - The ending breakpoint for the responsive query (only applicable for "between" queries).
 * @returns A boolean value indicating whether the current viewport matches the specified responsive query.
 */
export function useResponsive(
  query: string,
  start: Breakpoint,
  end: Breakpoint | number = 0
) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

/**
 * A custom React hook that returns the current width of the viewport based on Material-UI's breakpoints.
 *
 * @returns The current width of the viewport as a string representing the breakpoint key.
 */
export function useWidth() {
  const theme = useTheme();

  const keys: Array<Breakpoint> = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null as Breakpoint | null) || "xs"
  );
}
