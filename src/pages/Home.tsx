import { Box, Typography, Grid, Paper } from "@mui/material";

const dummyProducts = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Milk" },
  { id: 3, name: "Bread" },
];

export default function Home() {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Welcome 👋
      </Typography>

      <Grid container spacing={2}>
        {dummyProducts.map((p) => (
          <Grid key={p.id}>
            <Paper sx={{ p: 2, textAlign: "center" }}>
              {p.name}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
