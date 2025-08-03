'use client';

import { Typography, Container } from '@mui/material';
import { useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const params = useParams();
  const { id } = params;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Project Detail - ID: {id}
      </Typography>
      <Typography>
        This is a detailed view for project <strong>{id}</strong>.
      </Typography>
    </Container>
  );
}
