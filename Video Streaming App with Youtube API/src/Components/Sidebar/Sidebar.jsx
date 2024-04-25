import React from "react";
import { categories } from "../../Utils/Constants";
import { Stack } from "@mui/material";

const selectedCategory = "New";
function Sidebar() {
  console.log(categories);
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => {
        return (
          <button
            className="category-btn"
            key={cat.name}
            style={{
              background: cat.name === selectedCategory && "#FC1503",
              color: "white",
            }}
          >
            <span
              style={{
                color: cat.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {cat.icon}
            </span>
            <span
              style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}
            >
              {cat.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
