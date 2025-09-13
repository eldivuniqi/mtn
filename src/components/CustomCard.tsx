import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

interface CustomCardProps {
  text: string;
  buttonText: string;
  href: string;
}

const CustomCard = ({ text, buttonText, href }: CustomCardProps) => {
  return (
    <Card sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center", p: 2, borderRadius: '12px', backgroundColor: 'rgb(187, 14, 128)', color: '#f5f5f5' }}>
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
          <Link href={href} 
          style={{backgroundColor: '#f5f5f5', 
          color: 'rgb(187, 14, 128)', 
          padding: 12,
          borderRadius: 6,
          border: 'none',
          fontWeight: 600
          }}>
          {buttonText}
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;