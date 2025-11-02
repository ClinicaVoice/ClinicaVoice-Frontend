import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// 🖼 Import team images
import John from "../assets/John.jpg";
import Omotola from "../assets/Phoebe.jpg";
import Brian from "../assets/Brian.jpg";
import Chinedu from "../assets/Chinedu.jpg";
import Onyebuchi from "../assets/JohnO.jpg";
import Amaka from "../assets/Amaka.jpg";
import Vinnie from "../assets/Vinnie.jpg"; // Professor's image

// 👥 Team members
const team = [
  {
    name: "John Austria",
    roleKey: "role_pm",
    image: John,
    linkedin: "https://www.linkedin.com/in/john-patrick-austria-0a6343b1/",
  },
  {
    name: "Omotola",
    roleKey: "role_frontend",
    image: Omotola,
    linkedin: "https://www.linkedin.com/in/omotola-onigbogi/",
  },
  {
    name: "Brian",
    roleKey: "role_ai",
    image: Brian,
    linkedin: "https://www.linkedin.com/in/brian-ajunwa/",
  },
  {
    name: "Chinedu",
    roleKey: "role_backend",
    image: Chinedu,
    linkedin: "https://www.linkedin.com/in/chinedu-nwolisa/",
  },
  {
    name: "Onyebuchi",
    roleKey: "role_devops",
    image: Onyebuchi,
    linkedin: "https://www.linkedin.com/in/onyebuchi-john-okoli/",
  },
  {
    name: "Amaka",
    roleKey: "role_qa",
    image: Amaka,
    linkedin: "https://www.linkedin.com/in/chiamaka-okoye/",
  },
];

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      key: "features_voice",
      textKey: "features_voice_text",
      link: "/dashboard/transcribe",
    },
    {
      key: "features_template",
      textKey: "features_template_text",
      link: "/dashboard/reports",
    },
    {
      key: "features_analytics",
      textKey: "features_analytics_text",
      link: "/dashboard/analytics",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F9FAFB", py: 8 }}>
      <Container maxWidth="lg">
        {/* 🔹 Title */}
        <Typography
          variant="h4"
          sx={{ color: "#2E3A59", fontWeight: 700, mb: 2, textAlign: "center" }}
        >
          {t("about_title")}
        </Typography>

        <Typography sx={{ color: "text.secondary", textAlign: "center", mb: 5 }}>
          {t("about_description")}
        </Typography>

        {/* 👥 Team Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {team.map((m) => (
            <Grid item xs={12} sm={6} md={4} key={m.name}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 4,
                  transition: "transform .18s, box-shadow .18s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
                elevation={1}
              >
                <Avatar
                  alt={m.name}
                  src={m.image}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "#ffffff",
                    boxShadow: 1,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {m.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(m.roleKey)}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <IconButton
                      size="small"
                      aria-label="linkedin"
                      component="a"
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon fontSize="small" color="primary" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 👨‍🏫 Faculty Advisor Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            alt="Professor Vinnie"
            src={Vinnie}
            sx={{
              width: 90,
              height: 90,
              mb: 1,
              boxShadow: 2,
              border: "3px solid #fff",
              objectFit: "cover",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {t("about_faculty")}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "0.95rem" }}>
            Professor Vinnie Moraes — {t("role_faculty")}
          </Typography>
        </Box>

        {/* ⚙️ Features Section */}
        <Typography
          variant="h5"
          sx={{ color: "#2E3A59", fontWeight: 700, mb: 3, textAlign: "center" }}
        >
          {t("features_title")}
        </Typography>

        <Grid container spacing={3}>
          {features.map((f) => (
            <Grid item xs={12} md={4} key={f.key}>
              <Card
                sx={{
                  p: 2,
                  transition: "transform .18s, box-shadow .18s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                    backgroundColor: "#fff8f8",
                    cursor: "pointer",
                  },
                }}
                elevation={1}
                onClick={() => navigate(f.link)}
              >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {t(f.key)}
                  </Typography>
                  <Typography color="text.secondary">{t(f.textKey)}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
