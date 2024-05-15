import { useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import { useResponsive } from "@/hooks/useResponsive";

import { account } from "@/_mock/account";

import { NAV } from "@/utils/configLayout";

import { navConfig, INavItem } from "@/utils/configNavigation";
import { Grid } from "@mui/material";
import { green } from '@mui/material/colors'; // Import green color from Material-UI


// ----------------------------------------------------------------------

export default function MainSideBar({
  openNav,
  onCloseNav,
}: {
  openNav: boolean;
  onCloseNav: () => void;
}) {
  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 1,
        py: 0,
        px: 0, // Adjust the padding to make it thinner
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        position: "fixed",
        bgcolor: (theme) => "01b18b",
        width: 250, // Adjust the width to make it thinner
      }}
    >
      <Avatar src={account.photoURL} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{account.displayName}</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack
      component="nav"
      spacing={0.5}
      sx={{
        px: 0, // Adjust the padding to make it thinner
        position: "fixed",
        top: 160, // Adjust the top position as per your requirement
        left: 0, // Adjust the left position as per your requirement
        zIndex: 1000, // Adjust the z-index if necessary
        backgroundColor: "#01b18b", // Optional: Set background color
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
        width: 260, // Adjust the width to make it thinner
      }}
    >
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10, position: "relative" }}>
      <Stack
        alignItems="center"
        spacing={3}
        sx={{ pt: 5, borderRadius: 2, position: "absolute", bottom: 0, left: 0 }}
      >
        <Box
          component="img"
          src="/assets/illustrations/Banner_SandaxMesa de trabajo 23.png"
          
          sx={{
            px: 0, // Adjust the padding to make it thinner
            py: 0,

            position: "fixed",
            top: 500, // Adjust the top position as per your requirement
            left: 0, // Adjust the left position as per your requirement
            zIndex: 1000, // Adjust the z-index if necessary
            backgroundColor: "#fff", // Optional: Set background color
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
            width: 260, // Adjust the width to make it thinner
          }}
        />
  
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Get more?</Typography>
  
          <Typography variant="body2"       
      sx={{
        px: 0, // Adjust the padding to make it thinner
        position: "fixed",
        top: 460, // Adjust the top position as per your requirement
        left: 0, // Adjust the left position as per your requirement
        zIndex: 1000, // Adjust the z-index if necessary
        backgroundColor: "#fff", // Optional: Set background color
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
        width: 260, // Adjust the width to make it thinner
      }}>
            Powered by Sandax
          </Typography>
        </Box>
  
        <Button
          href="https://material-ui.com/store/items/minimal-dashboard/"
          target="_blank"
          variant="contained"
          color="inherit"
        >
          Colombia
        </Button>
      </Stack>
    </Box>
  );
  

  return (
    <>
      <Grid
        container
        maxWidth={160} // Adjust the maxWidth to make it thinner
        direction="column"
        justifyContent={"space-between"}
        wrap="nowrap"
      >
        <Grid item>{renderAccount}</Grid>
        <Grid item>{renderMenu}</Grid>

        <Grid item>{renderUpgrade}</Grid>
      </Grid>
    </>
  );
}

MainSideBar.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }: { item: INavItem }) {
  return (
    <ListItemButton
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        textTransform: "capitalize",
        color: "#fff",
        fontWeight: "fontWeightSemiBold",
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.03),
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
        },
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
