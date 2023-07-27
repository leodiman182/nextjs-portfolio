import { Button, ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

export default function CustomButtom({ onClick, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} variant="contained">
        {children}
      </Button>
    </ThemeProvider>
  );
}
