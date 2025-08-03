import CustomCard from '@/components/CustomCard';
import { Typography, Card, CardContent, Grid, CardActionArea, CardMedia } from '@mui/material';
import Link from 'next/link';

const mockProjects = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  title: `Project ${i + 1}`,
  description: 'Short description of the project.',
  image: 'https://via.placeholder.com/300x200', 
}));

export default function Projects() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={2}>
        {mockProjects.map((project) => (
          <Grid key={project.id}>
            <Link href={`/projects/${project.id}`} passHref>
              <Card sx={{ height: '100%' }}>
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
      <CustomCard text='hello' buttonText='hellooo'/>
    </>
  );
}
