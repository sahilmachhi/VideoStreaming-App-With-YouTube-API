import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Paper
        component="form"
        onSubmit={() => {}}
        className="px-4 pl-3 border-e3e3e3 border-4 shadow-none"
        sx={{ borderRadius: 10, backgroundColor: "white" }}
      >
        <input
          type="text"
          className="search-bar"
          placeholder="search here"
          value=""
          //   onChange={((e.value) => setSearch(e.value))}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBar;
