import React from "react";
import SidebarProducts from "../../components/sidebar/SidebarProducts";
import RangeSlider from "../../components/slider/RangeSlider";
import ProductCard from "../../components/card/ProductCard";
import { Box } from "@mui/material";

function Products() {
  return (
<Box sx={{ display: 'flex' }}>
      <Box sx={{ flex: '0 0 300px' }}>
        <SidebarProducts />
      </Box>
      <Box sx={{ flex: 1, padding: 2 }}>
        <ProductCard />
      </Box>
    </Box>
  );
}

export default Products;
