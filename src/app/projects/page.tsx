import CustomCard from '@/components/CustomCard';
import { Typography, Card, CardContent, Grid, CardActionArea, CardMedia, Container } from '@mui/material';
import Link from 'next/link';

const mockProjects = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  title: `Project ${i + 1}`,
  description: 'Short description of the project.',
  image: 'https://via.placeholder.com/300x200', 
}));

export default function Projects() {
  return (
    <Container sx={{my: 5}}>
      <Grid container spacing={2} sx={{pb: 10}}>
        {mockProjects.map((project) => (
          <Grid key={project.id} 
                sx={{
        flex: '1 1 calc(100% - 16px)', 
        maxWidth: {
          xs: '100%',
          sm: '48%', 
          md: '31%', 
          lg: '23.5%', 
        },
        minWidth: '260px', 
        boxSizing: 'border-box',
      }}
          >
            <Link href={`/projects/${project.id}`} passHref>
              <Card sx={{ height: '100%', width: {md: '270px', xs: '100%'} }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <CustomCard text='Get in Touch with Us?' 
                        href="/contact" buttonText='Contact Us' />
    </Container>
  );
}
