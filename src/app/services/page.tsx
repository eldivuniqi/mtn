"use client";

import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import Accordion from '@/components/Accordion';
import CustomCard from '@/components/CustomCard';

const accordionData = [
    { title: 'PHASE A+B: Inception and Feasibility', description: 'Establishing the clients requirements and assessing constraints, Preparing feasibility studies to evaluate project viability, Identifying statutory and legal requirements, Developing initial strategic brief, Assembling key consultants and advisors for project development.' },
    { title: 'PHASE C: Outline Proposals', description: 'Developing initial design options based on site analysis and planning constraints, Preparing a cost plan and initial budget estimates, Reviewing procurement methods, Assessing environmental and sustainability factors, Coordinating with statutory authorities and stakeholders' },
    { title: 'PHASE D: Scheme Design', description: 'Refining design proposals and integrating client feedback, Conducting technical feasibility studies, Preparing scheme design drawings and documents, Obtaining formal client approval for the design.' },
    { title: 'PHASE E: Detail Design', description: 'Developing the detailed design in coordination with consultants, Preparing technical specifications and working drawings, Coordinating structural, mechanical, and electrical design, Ensuring compliance with building regulations and planning approvals.' },
    { title: 'PHASE F: Production Information and Bills of Quantities', description: 'Producing detailed construction drawings and specifications, Preparing bills of quantities and cost estimates, Compiling contract documentation for tendering, Ensuring accuracy and completeness of technical information' },
];

const accordionData2 = [
    { title: 'PHASE A: Survey, Evaluation, Feasibility, and Program Compilation', description: 'Identifying investor requirements and reviewing possible obstacles, Preparing notes and studies to assist the investor in deciding on the investment methodology and whether to proceed or discontinue the process, Compiling a concise strategic summary on behalf of the investor, reconfirming key requirements and obstacles, Identifying procedures, organizational structure, and the range of professional consultants and others involved in the project.' },
    { title: 'PHASE B: Urban Solution', description: 'Further development of the strategic summary based on urban planning conditions and the approved program, Preparing the urban project and forecasting project costs, Reviewing procurement steps.' },
    { title: 'PHASE C: Conceptual Solution and Sketch Proposals', description: 'Continuing the refinement of the strategic summary at the level of the conceptual solution based on the urban solution and the investor-approved program & Preparing the conceptual project and forecasting project costs, Reviewing the procurement framework' },
    { title: 'PHASE D: Conceptual Project', description: 'Full development of the conceptual/urban solution at the conceptual project level, Investor approval for proceeding with project development.' },
    { title: 'PHASE E: Main Project', description: 'Preparing the main project with all phases (Architecture + Structure + Machinery + Water Supply & Sewerage + Electrical) and other necessary information (Geomechanical Report + Thermodynamic and Acoustic Report + Fire Protection Report...) required for obtaining a construction permit' },
    { title: 'PHASE F: Specification of Construction and Equipment Data + Bill of Quantities and Cost Estimation', description: 'Preparing specifications for all parts and elements of the construction project (Bill of Quantities + Cost Estimation + Details + Schemes...). & Pre-preparing tender documentation.' },
];

export default function Services() {
    const cards = [
        { title: '20% Faster', description: 'We employ professionals with superior education and skills. Due to the welfare in our country, we are able to engage more than one professional on the specific task requested by our clients, therefore be faster in our deliveries.' },
        { title: '20% Better', description: 'All projects and its specific phase requirements are processed by licensed and certified professionals. Prior to preliminary or final deliveries all documents are checked by quality control division.' },
        { title: '20% Cheaper', description: 'The difference in welfare of our partnering countries allows us to guarantee price reduction in rendered professional services.' },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                textAlign: 'center',
                bgcolor: '#f5f5f5',
                py: 6,
            }}
        >
            <Box sx={{ maxWidth: 600, mb: 6 }}>
                <Typography variant="h3" gutterBottom>
                    Connecting the world through design.
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    At MTN Communications, we bring the visionary expertise of renowned architects from abroad to the UK stage. Our company was founded on the
                    belief that world-class architectural expertise should be accessible and affordable for everyone—whether you're an individual, a business,
                    or a large organization.
                </Typography>
            </Box>

            <Container maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    {cards.map(({ title, description }) => (
                        <Grid container spacing={2} key={title}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    px: 3,
                                    py: 4,
                                    textAlign: 'center',
                                }}
                                elevation={3}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ maxWidth: 600, my: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Learn More
                </Typography>

                <Box sx={{ gap: 3 }}>
                    <Accordion items={accordionData} />
                    <Accordion items={accordionData2} />

                    <Box sx={{ maxWidth: 600, mb: 6 }}>
                        <Typography variant="h5" gutterBottom>
                            Ensuring Perfection and Precision in Every Project, Backed by Renowned Architectural Expertise.
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Our services cover the spectrum of showcasing innovative architecture and providing professional consultancy services. We connect leading architects from abroad with clients across the UK, delivering exceptional design solutions and creating impactful architectural experiences. Our platform aims
                            to foster collaboration and inspire creativity in the world of architecture and more. Exploiting our <b style={{ color: '#bb0e80' }}>20% DISCOUNT</b>, we bring all our services at your table for a fraction of the price.
                        </Typography>
                    </Box>

                    <CustomCard
                        text="Architecture for Everyone"
                        buttonText="See Projects"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                </Box>
            </Box>
        </Box>
    );
}
