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

const team = [
  { name: "John Austria", roleKey: "role_pm" },
  { name: "Omotola", roleKey: "role_frontend" },
  { name: "Brian", roleKey: "role_ai" },
  { name: "Chinedu", roleKey: "role_backend" },
  { name: "Onyebuchi", roleKey: "role_devops" },
  { name: "Amaka", roleKey: "role_qa" },
];

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Define where each feature should link
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
        <Typography
          variant="h4"
          sx={{ color: "#2E3A59", fontWeight: 700, mb: 2, textAlign: "center" }}
        >
          {t("about_title")}
        </Typography>
        <Typography sx={{ color: "text.secondary", textAlign: "center", mb: 5 }}>
          {t("about_description")}
        </Typography>

        {/* Team Grid 2x3 */}
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
                  sx={{
                    width: 72,
                    height: 72,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "#ffffff",
                    boxShadow: 1,
                    color: "#2E3A59",
                    fontWeight: 700,
                  }}
                >
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </Avatar>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {m.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(m.roleKey)}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <IconButton size="small" aria-label="linkedin">
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Faculty Advisor */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {t("about_faculty")}
          </Typography>
          <Typography color="text.secondary">
            Professor Vinnie — {t("role_faculty")}
          </Typography>
        </Box>

        {/* Features (below team) */}
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
