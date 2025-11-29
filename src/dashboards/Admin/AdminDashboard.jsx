import React, { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Tooltip,
} from "@mui/material";
import { Refresh, Download, Search, ArrowForwardIos } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import AdminLayout from "../../layouts/AdminLayout";
//import DashboardHeader from "../components/DashboardHeader";

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState("overview");
  const [roleFilter, setRoleFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Dr. John Smith",
      email: "john.smith@clinicavoice.ca",
      role: "doctor",
      lastLogin: "2025-11-27",
      status: "active",
    },
    {
      id: 2,
      name: "Dr. Amina Patel",
      email: "amina.patel@clinicavoice.ca",
      role: "doctor",
      lastLogin: "2025-11-26",
      status: "active",
    },
    {
      id: 3,
      name: "Marie Tremblay",
      email: "marie.tremblay@clinicavoice.ca",
      role: "patient",
      lastLogin: "2025-11-24",
      status: "active",
    },
    {
      id: 4,
      name: "Alex Green",
      email: "alex.green@clinicavoice.ca",
      role: "admin",
      lastLogin: "2025-11-25",
      status: "active",
    },
    {
      id: 5,
      name: "Test User",
      email: "test.user@clinicavoice.ca",
      role: "patient",
      lastLogin: "2025-11-20",
      status: "inactive",
    },
  ];

  const metrics = {
    totalUsers: users.length,
    doctors: users.filter((u) => u.role === "doctor").length,
    patients: users.filter((u) => u.role === "patient").length,
    dailyTranscriptions: 184,
    uptime: 99.8,
    latencyMs: 210,
  };

  const recentActivity = [
    {
      id: 1,
      type: "report",
      description: "New transcription completed for Chest Clinic",
      time: "5 min ago",
    },
    {
      id: 2,
      type: "user",
      description: "New doctor added: Dr. Amina Patel",
      time: "32 min ago",
    },
    {
      id: 3,
      type: "system",
      description: "Autoscaling event: +2 worker nodes",
      time: "1 hr ago",
    },
  ];

  const reportStats = [
    { date: "2025-11-24", total: 120, successful: 118, failed: 2 },
    { date: "2025-11-23", total: 102, successful: 100, failed: 2 },
    { date: "2025-11-22", total: 96, successful: 96, failed: 0 },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesRole =
        roleFilter === "all" ? true : u.role === roleFilter;
      const matchesSearch =
        !searchTerm.trim() ||
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesRole && matchesSearch;
    });
  }, [users, roleFilter, searchTerm]);

  const renderOverview = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("dashboard_admin")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("admin_dashboard_subtitle")}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {t("admin_metric_users")}
              </Typography>
              <Typography variant="h5">{metrics.totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {t("admin_metric_doctors")}
              </Typography>
              <Typography variant="h5">{metrics.doctors}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {t("admin_metric_patients")}
              </Typography>
              <Typography variant="h5">{metrics.patients}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {t("admin_metric_transcriptions")}
              </Typography>
              <Typography variant="h5">
                {metrics.dailyTranscriptions}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 2 }}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {t("admin_systemHealth_title")}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {t("admin_systemHealth_subtitle")}
                  </Typography>
                </Box>
                <Tooltip title={t("refresh") || "Refresh"}>
                  <IconButton size="small">
                    <Refresh fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  {t("admin_uptime_label")}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={metrics.uptime}
                  sx={{ height: 8, borderRadius: 4 }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5, display: "block" }}
                >
                  {metrics.uptime}% {t("admin_uptime_value")}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  {t("admin_systemHealth_latency")}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={Math.min(metrics.latencyMs / 5, 100)}
                  sx={{ height: 8, borderRadius: 4 }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5, display: "block" }}
                >
                  {metrics.latencyMs} ms
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {t("admin_activity_title")}
                </Typography>
                <Chip
                  label={t("admin_activity_label") || "Live"}
                  size="small"
                  color="success"
                  sx={{ fontWeight: 500 }}
                />
              </Stack>

              <Stack spacing={1.5}>
                {recentActivity.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "#F3F4F6",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {item.time}
                      </Typography>
                    </Box>
                    <Chip
                      size="small"
                      label={item.type}
                      sx={{ textTransform: "capitalize" }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {t("admin_reports_overview") || "Reports overview"}
              </Typography>
              <Tooltip title={t("export_csv") || "Export CSV"}>
                <IconButton size="small">
                  <Download fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t("admin_column_date")}</TableCell>
                  <TableCell>{t("admin_column_totalReports")}</TableCell>
                  <TableCell>{t("admin_column_success")}</TableCell>
                  <TableCell>{t("admin_column_failed")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportStats.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.successful}</TableCell>
                    <TableCell>{row.failed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderUsers = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("admin_userManagement")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("admin_userManagement_subtitle") ||
            "Search, filter and inspect ClinicaVoice users."}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
                alignItems={{ xs: "stretch", sm: "center" }}
              >
                <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <Search fontSize="small" sx={{ mr: 1, color: "grey.500" }} />
                  <TextField
                    size="small"
                    fullWidth
                    placeholder={t("admin_search_placeholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Box>
                <FormControl size="small" sx={{ minWidth: 160 }}>
                  <InputLabel>{t("admin_filter_role")}</InputLabel>
                  <Select
                    value={roleFilter}
                    label={t("admin_filter_role")}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <MenuItem value="all">
                      {t("admin_filter_all")}
                    </MenuItem>
                    <MenuItem value="admin">{t("role_admin")}</MenuItem>
                    <MenuItem value="doctor">{t("role_doctor")}</MenuItem>
                    <MenuItem value="patient">{t("role_patient")}</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>{t("admin_column_name")}</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>{t("admin_column_role")}</TableCell>
                    <TableCell>{t("admin_column_lastLogin")}</TableCell>
                    <TableCell>{t("admin_column_status")}</TableCell>
                    <TableCell align="right">
                      {t("admin_column_actions")}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((u) => (
                    <TableRow key={u.id} hover>
                      <TableCell>{u.name}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>{t(`role_${u.role}`)}</TableCell>
                      <TableCell>{u.lastLogin}</TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          label={
                            u.status === "active"
                              ? t("status_active") || "Active"
                              : t("status_inactive") || "Inactive"
                          }
                          color={u.status === "active" ? "success" : "default"}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          onClick={() => setSelectedUser(u)}
                        >
                          <ArrowForwardIos fontSize="inherit" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredUsers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          {t("admin_noUsers") ||
                            "No users match your filters."}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {t("admin_userDetails_title")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {t("admin_userDetails_subtitle")}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {selectedUser ? (
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    {selectedUser.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {selectedUser.email}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t("admin_column_role")}:{" "}
                    {t(`role_${selectedUser.role}`)}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t("admin_column_lastLogin")}: {selectedUser.lastLogin}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {t("admin_column_status")}:{" "}
                    {selectedUser.status === "active"
                      ? t("status_active") || "Active"
                      : t("status_inactive") || "Inactive"}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mt: 1.5 }}
                  >
                    {t("admin_userDetails_placeholder")}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {t("admin_userDetails_empty")}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAnalytics = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("admin_analytics_title") || "Analytics"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("admin_analytics_subtitle") ||
            "High-level overview of usage trends across ClinicaVoice."}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                {t("admin_analytics_languageTitle") ||
                  "Top dictation languages"}
              </Typography>

              <Stack spacing={1.5}>
                {[
                  { label: "English", value: 72 },
                  { label: "French (Canada)", value: 18 },
                  { label: "Other", value: 10 },
                ].map((lang) => (
                  <Box key={lang.label}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mb: 0.5 }}
                    >
                      <Typography variant="body2">{lang.label}</Typography>
                      <Typography variant="body2">{lang.value}%</Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={lang.value}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                {t("admin_analytics_roleTitle") ||
                  "Usage by role (last 7 days)"}
              </Typography>

              <Stack spacing={1.5}>
                {[
                  { labelKey: "role_doctor", value: 64 },
                  { labelKey: "role_admin", value: 8 },
                  { labelKey: "role_patient", value: 28 },
                ].map((item) => (
                  <Box key={item.labelKey}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mb: 0.5 }}
                    >
                      <Typography variant="body2">
                        {t(item.labelKey)}
                      </Typography>
                      <Typography variant="body2">{item.value}%</Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderSettings = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("admin_settings_title")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("admin_settings_subtitle")}
        </Typography>
      </Box>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle2">
                {t("admin_settings_autoscale")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("admin_settings_autoscale_hint") ||
                  "Simulated toggle. Later this can be wired to backend configuration."}
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Typography variant="subtitle2">
                {t("admin_settings_alerts")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("admin_settings_alerts_hint") ||
                  "Configure who receives incident notifications for latency or downtime."}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <AdminLayout active={activeNav} onNavChange={setActiveNav}>
      {activeNav === "overview" && renderOverview()}
      {activeNav === "users" && renderUsers()}
      {activeNav === "analytics" && renderAnalytics()}
      {activeNav === "reports" && renderOverview() /* reuse for now */}
      {activeNav === "settings" && renderSettings()}
    </AdminLayout>
  );
}
