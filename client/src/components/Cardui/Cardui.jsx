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
      <CardHeader title={product.productName} />
      <LazyLoadImagee
        alt={product.productName}
        height="120"
        width="200"
        effect="blur"
        src={product.productImage}
      />

      <CardContent>
        <Typography variant="h5">${product.productPrice}</Typography>
      </CardContent>
    </Card>
  );
};
export default Cardui;
