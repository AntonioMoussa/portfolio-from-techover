import React from 'react';
import { Box, Typography } from '@mui/material';

function Service() {
  const services = [
    {
      title: "Webbdesign",
      description: "Skapande av användarvänliga och responsiva designlösningar.",
      image: "Webb.png",
      width: 80, 
      height: 80, 
    },
    {
      title: "Front-end utveckling",
      description: "Utveckling av moderna och interaktiva användargränssnitt.",
      image: "Frontend.png",
      width: 80,
      height: 80,
    },
    {
      title: "Back-end utveckling",
      description: "Byggande av robusta och säkra backend-lösningar.",
      image: "Backend.png",
      width: 80,
      height: 80,
    },
    {
      title: "UI/UX Design",
      description: "Design som skapar engagerande användarupplevelser.",
      image: "UI-UX.png",
      width: 80,
      height: 80,
    },
  ];

  return (
    <Box id="services" 
      sx={{
        p: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Rubrik */}
      <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "45px", mb: 10, color: "white" }}>
        Mina Tjänster
      </Typography>

      {/* Rutor med tjänster */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", 
          flexWrap: "wrap", 
          gap: 2,
          justifyContent: "center",
          mb: 8,
          padding: 2,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "90%", sm: "40%", md: "20%" },  
              boxShadow: 3,
              borderRadius: 2,
              border: "2px solid #fd853a",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              textAlign: "center",
              backgroundColor: "#1d1d1d",
            }}
          >
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: service.width, 
                height: service.height, 
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "white" }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Service;
