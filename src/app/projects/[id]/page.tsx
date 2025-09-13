'use client';

import { useState } from 'react';
import { Typography, Container, Box, Modal } from '@mui/material';
import { useParams } from 'next/navigation';
import projects from '@/data/projects.json';  // Adjust path if needed

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" color="error" align="center">
          Project not found.
        </Typography>
      </Container>
    );
  }

  const { title, description, photoSrc, youtubeLink } = project;

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', py: 4, px: 2 }}>
        <Typography variant="h3" gutterBottom>{title}</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
          {photoSrc.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`${title} - Image ${index + 1}`}
              onClick={() => setSelectedImage(src)}
              sx={{
                width: 'calc(20% - 16px)',
                minWidth: 100,
                maxWidth: '100%',
                borderRadius: 1,
                cursor: 'pointer',
                objectFit: 'cover',
                aspectRatio: '4 / 3',
                boxShadow: 1,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          ))}
        </Box>

        {/* Lightbox Modal */}
        <Modal
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            component="img"
            src={selectedImage || ''}
            alt="Enlarged project photo"
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: 2,
              boxShadow: 24,
            }}
          />
        </Modal>

        {/* Description */}
        <Typography variant="body1" paragraph>{description}</Typography>

        {/* YouTube Embed */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <iframe
            width="100%"
            height="415"
            src={youtubeLink.replace('watch?v=', 'embed/')}
            title={`YouTube video player - ${title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 8 }}
          />
        </Box>
      </Box>
    </Container>
  );
}
