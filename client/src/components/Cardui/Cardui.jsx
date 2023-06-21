import { useTheme } from "@emotion/react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

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
      <CardHeader title={product.name} />
      <LazyLoadImagee
        alt={product.name}
        height="120"
        width="200"
        effect="blur"
        src={product.Image}
      />

      <CardContent>
        <Typography variant="h5">${product.Price}</Typography>
      </CardContent>
    </Card>
  );
};
export default Cardui;
