import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

interface CustomCardProps {
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({ text, buttonText, onButtonClick }) => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto", textAlign: "center", p: 2 }}>
      <CardContent>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "28px", md: "64px" },
            fontWeight: "bold",
            mb: 3,
          }}
        >
          {text}
        </Typography>
        <Box>
          <Button variant="contained" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;