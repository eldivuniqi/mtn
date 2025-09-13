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
  title: string;
  description: string;
};

type AccordionProps = { 
  items: AccordionItem[];
};

const borderColor = 'rgb(187, 14, 128)';

export default function Accordion({ items }: AccordionProps) {
  return (
    <Box sx={{ mt: 3 }}>
      {items.map(({ title, description }, index) => (
        <MuiAccordion
          key={index}
          sx={{
            width: '100%',
            borderRadius: 3,
            border: `1px solid ${borderColor}`,
            boxShadow: 'none',
            mb: 1,
            '&:before': {
              content: 'none',
            },
            '&.Mui-expanded': {
              border: `1px solid ${borderColor}`,
              borderRadius: 6,
            },
            '& .MuiAccordionSummary-root': {
              borderTopLeftRadius: index === 0 ? 6 : 0,
              borderTopRightRadius: index === 0 ? 6 : 0,
              borderBottomLeftRadius: index === items.length - 1 ? 6 : 0,
              borderBottomRightRadius: index === items.length - 1 ? 6 : 0,

              backgroundColor: 'transparent',
              transition: 'background-color 0.3s ease',

              '.Mui-expanded &': {
                backgroundColor: borderColor,
                color: '#fff',
              },
            },
            '& .MuiAccordionDetails-root': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: borderColor }} />}>
            <Typography sx={{fontSize: '16px', fontWeight: 600, color: 'rgba(0, 0, 0, 0.4)'}}>
              {title}
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize: '14px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.6)', textAlign: 'left'}}>
              {description}
              </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  );
}
