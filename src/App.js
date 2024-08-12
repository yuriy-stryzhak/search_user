import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { fetchResults } from "./api";
import SearchForm from "./components/SearchForm";
import User from "./components/User";
import './App.css';

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false); 

  const onSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
    setSearched(true);
  };

  return (
    <Container maxWidth="md" className="container">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: 'bold', mb: 5 }}
      >
        GitHub User Search
      </Typography>
      <SearchForm onChange={onSearchChange} onSubmit={onSearchSubmit} value={query} />
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold'}}>
        Results: {results.length}
      </Typography>

      <Grid container spacing={2}>
        {searched && results.length === 0 ? (
          <Typography variant="h6" color="error" sx={{ padding: '15px', marginTop: '15px'  }}>
            No users found.
          </Typography>
        ) : (
          results.map((user) => (
            <User key={user.login} avatar={user.avatar_url} url={user.html_url} username={user.login} />
          ))
        )}
      </Grid>
      
    </Container>
  );
}
