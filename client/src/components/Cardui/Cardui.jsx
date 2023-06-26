import { useTheme } from "@emotion/react";
import { Card, Typography } from "@mui/material";

import React from "react";
import LazyLoadImagee from "../LazyLoadImage/LazyLoadImage";

const Cardui = ({ product }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        textAlign: "center",
        maxWidth: 240,
        m: 2,
        "&:hover": { bgcolor: theme.palette.activeLink.main, color: "white" },
      }}
    >
      <Typography variant="h5">{product.name}</Typography>

      <LazyLoadImagee
        alt={product.name}
        height="100"
        width="150"
        effect="blur"
        src={product.image}
      />
      <Typography variant="h6">${product.price}</Typography>
    </Card>
  );
};
export default Cardui;
