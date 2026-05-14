'use client';

import { useState } from 'react';
import { Typography, Container, Box, Modal, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import projects from '@/data/projects.json';
import Head from 'next/head';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((proj) => proj.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

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

  const displayedPhotos = showAll ? photoSrc : photoSrc.slice(0, 5);

  return (
    <>
      <Head>
        <title>Explore {title} | MTN Communications Architectural Excellence</title>
        <meta
          name="description"
          content={`Discover the innovative design and craftsmanship behind ${title}, a featured project by MTN Communications. See detailed images, watch video walkthroughs, and experience world-class architectural solutions tailored for UK clients.`}
        />
      </Head>
    <Container sx={{ mt: 4 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', py: 4, px: 2 }}>
        <Button
          onClick={() => router.push('/projects')}
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 2,
            textTransform: 'none',
            fontWeight: 500,
            color: 'rgb(217, 215, 215)',
          }}
        >
          Back to Projects
        </Button>

        <Typography variant="h3" gutterBottom>{title}</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          {displayedPhotos.map((src, index) => (
            <Box
              key={index}
              onClick={() => setSelectedImage(src)}
              sx={{
                width: 'calc(20% - 16px)',
                minWidth: 100,
                position: 'relative',
                aspectRatio: '4 / 3',
                cursor: 'pointer',
                borderRadius: 1,
                boxShadow: 1,
                overflow: 'hidden',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <Image
                src={src}
                alt={`${title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 15vw"
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="/placeholder.jpg" 
              />
            </Box>
          ))}
        </Box>

        {photoSrc.length > 5 && (
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Button
              variant="contained"
              onClick={() => setShowAll(!showAll)}
              sx={{
                backgroundColor: 'rgb(187, 14, 128)',
                '&:hover': {
                  backgroundColor: 'rgb(160, 12, 110)',
                },
              }}
            >
              {showAll ? 'Show Less Photos' : 'Show More Photos'}
            </Button>
          </Box>
        )}

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

        <Typography variant="body1" paragraph>{description}</Typography>

        {youtubeLink && (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
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
        )}
      </Box>
    </Container>
    </>
  );
}
