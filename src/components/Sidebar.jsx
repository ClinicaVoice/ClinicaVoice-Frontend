import React from "react";
import { Box, List, ListItemButton, ListItemText, Drawer, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const nav = [
    { to: "/dashboard", label: t("sidebar_overview") },
    { to: "/dashboard/patients", label: t("sidebar_patients") },
    { to: "/dashboard/transcriptions", label: t("sidebar_transcriptions") },
    { to: "/dashboard/reports", label: t("sidebar_reports") },
    { to: "/dashboard/settings", label: t("sidebar_settings") },
  ];

  if (!isMdUp) return null;

  return (
    <Box sx={{ width: 240 }}>
      <Drawer variant="permanent" open PaperProps={{ sx: { position: "relative", border: "none", boxShadow: 2 } }}>
        <Box sx={{ p: 2, height: "100%" }}>
          <List>
            {nav.map((n) => (
              <ListItemButton key={n.label}>
                <ListItemText primary={n.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
