import React from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionItem = { 
  title: string,
  description: string
}

type AccordionProps = { 
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <>
    <Box sx={{mt: 3}}>
      {items.map(({ title, description }, index) => (
        <MuiAccordion key={index} sx={{ width: '100%' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
      </Box>
    </>
  );
}
