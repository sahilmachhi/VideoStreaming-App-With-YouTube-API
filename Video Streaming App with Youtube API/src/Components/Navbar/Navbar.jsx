import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      p={2}
      sx={{
        position: "static",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center" }}
        className="text-4xl text-white font-extrabold"
      >
        home
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
