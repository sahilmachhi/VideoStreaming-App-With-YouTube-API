import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <>
      <Paper
        component="form"
        onSubmit={searchSubmit}
        className="px-6 pl-3 border-e3e3e3 border-4 shadow-none flex items-center justify-center"
        sx={{
          borderRadius: 10,
          backgroundColor: "black",
          // display: { xs: "none", md: "block" },
          overflow: "visible",
          zIndex: 1,
          position: "sticky",
        }}
      >
        <input
          type="text"
          className="search-bar font-sans text-2xl py-1 bg-black text-white"
          placeholder="search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          aria-label="submit-search"
          id="search-submit"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/search/${search}`);
          }}
        >
          <SearchIcon className="text-white" />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBar;
