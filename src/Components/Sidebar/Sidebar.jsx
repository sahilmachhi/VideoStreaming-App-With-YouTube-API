import React from "react";
import { sideNavbar } from "../../Utils/Constants";
import { Stack } from "@mui/material";

function Sidebar({ category, setCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {sideNavbar.map((cat) => {
        return (
          <button
            className="category-btn"
            key={cat.name}
            style={{
              background: cat.name === category && "#C40C0C",
              color: "white",
            }}
            onClick={() => setCategory(cat.name)}
          >
            <span
              style={{
                color: cat.name === category ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {cat.icon}
            </span>
            <span style={{ opacity: cat.name === category ? "1" : "0.8" }}>
              {cat.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
