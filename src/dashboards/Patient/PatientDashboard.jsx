import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Chip,
} from "@mui/material";
//import DashboardHeader from "../components/DashboardHeader";
import { useTranslation } from "react-i18next";
import PatientLayout from "../../layouts/PatientLayout";

export default function PatientDashboard() {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState("home");
  const [selectedReport, setSelectedReport] = useState(null);
  const [messageDraft, setMessageDraft] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "doctor",
      text: "Your latest report looks stable. Please continue your medication.",
      time: "2025-11-23 14:22",
    },
    {
      id: 2,
      from: "patient",
      text: "Thank you, doctor.",
      time: "2025-11-23 14:30",
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const reports = [
    {
      id: 1,
      type: "Consultation Note",
      date: "2025-11-24",
      doctor: "Dr. John Smith",
      status: "available",
      summary: "Follow-up for hypertension. Blood pressure improved.",
    },
    {
      id: 2,
      type: "Radiology Report",
      date: "2025-11-20",
      doctor: "Dr. Amina Patel",
      status: "available",
      summary: "Chest X-ray normal. No acute process.",
    },
  ];

  const appointments = [
    {
      id: 1,
      date: "2025-11-28",
      time: "09:30",
      doctor: "Dr. John Smith",
      type: "Clinic Visit",
    },
    {
      id: 2,
      date: "2025-12-12",
      time: "13:00",
      doctor: "Dr. Amina Patel",
      type: "Virtual Visit",
    },
  ];

  const handleSendMessage = () => {
    if (!messageDraft.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        from: "patient",
        text: messageDraft,
        time: "Just now",
      },
    ]);
    setMessageDraft("");
  };

  const handleVoiceFileChange = (e) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const renderHome = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("dashboard_patient")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("patient_dashboard_subtitle")}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {t("patient_metric_upcoming")}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.5 }}>
                {appointments[0]?.date} — {appointments[0]?.time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {appointments[0]?.doctor}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {t("patient_metric_reports")}
              </Typography>
              <Typography variant="h6">{reports.length}</Typography>
              <Typography variant="body2" color="text.secondary">
                {t("patient_metric_reports_hint")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                {t("patient_timeline_title")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {t("patient_timeline_subtitle")}
              </Typography>

              <Stack spacing={1.5}>
                {reports.map((r) => (
                  <Box
                    key={r.id}
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "#F3F4F6",
                    }}
                  >
                    <Typography variant="body2">
                      {r.date} — {r.type}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block" }}
                    >
                      {r.summary}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                {t("patient_upload_title")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {t("patient_upload_subtitle")}
              </Typography>

              <Button variant="outlined" component="label" sx={{ mb: 1.5 }}>
                {t("patient_upload_choose")}
                <input
                  hidden
                  type="file"
                  accept="audio/*"
                  onChange={handleVoiceFileChange}
                />
              </Button>

              <Typography variant="body2" color="text.secondary">
                {selectedFile
                  ? selectedFile.name
                  : t("doctor_noFileSelected")}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 1.5 }}
              >
                {t("patient_upload_hint")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderResults = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("patient_myReports")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("patient_myReports_hint")}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>{t("admin_column_date")}</TableCell>
                    <TableCell>{t("patient_column_type")}</TableCell>
                    <TableCell>{t("admin_column_status")}</TableCell>
                    <TableCell>{t("admin_column_actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell>{r.date}</TableCell>
                      <TableCell>{r.type}</TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          label={t("status_available")}
                          color="success"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => setSelectedReport(r)}
                        >
                          {t("patient_viewReport")}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {reports.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          {t("patient_noReports") ||
                            "No reports available yet."}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                {t("patient_selectedReport_title") || "Report details"}
              </Typography>
              {selectedReport ? (
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                    {selectedReport.type}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {selectedReport.date} — {selectedReport.doctor}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5 }}>
                    {selectedReport.summary}
                  </Typography>
                  <Button variant="contained">
                    {t("patient_download") || "Download PDF"}
                  </Button>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {t("patient_noSelectedReport") ||
                    "Select a report from the list to view details."}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderMessages = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("patient_messages")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("patient_messages_subtitle") ||
            "Secure messages between you and your care team."}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Stack spacing={1.5}>
                {messages.map((m) => (
                  <Box
                    key={m.id}
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor:
                        m.from === "doctor" ? "#E0F2FE" : "#F3F4F6",
                      alignSelf:
                        m.from === "doctor" ? "flex-start" : "flex-end",
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {m.from === "doctor"
                        ? t("patient_label_doctor") || "Doctor"
                        : t("patient_label_you") || "You"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 0.5, mb: 0.5 }}
                    >
                      {m.text}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {m.time}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                {t("patient_newMessage_title") || "New message"}
              </Typography>
              <TextField
                multiline
                minRows={4}
                fullWidth
                value={messageDraft}
                onChange={(e) => setMessageDraft(e.target.value)}
                placeholder={t("patient_newMessage_placeholder") || "Write a message to your doctor..."}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={handleSendMessage}>
                {t("patient_sendMessage") || "Send"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAppointments = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("patient_appointments")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("patient_appointments_subtitle") ||
            "Upcoming visits and recent appointments."}
        </Typography>
      </Box>

      <Card>
        <CardContent>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t("admin_column_date")}</TableCell>
                <TableCell>{t("patient_column_time") || "Time"}</TableCell>
                <TableCell>{t("admin_patientName")}</TableCell>
                <TableCell>{t("patient_column_type")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.time}</TableCell>
                  <TableCell>{a.doctor}</TableCell>
                  <TableCell>{a.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );

  const renderSettings = () => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          {t("patient_settings_title")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("patient_settings_subtitle")}
        </Typography>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {t("patient_settings_future") ||
              "Future options like notification preferences, download history and account deletion can appear here."}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <PatientLayout active={activeNav} onNavChange={setActiveNav}>
      {activeNav === "home" && renderHome()}
      {activeNav === "results" && renderResults()}
      {activeNav === "messages" && renderMessages()}
      {activeNav === "appointments" && renderAppointments()}
      {activeNav === "settings" && renderSettings()}
    </PatientLayout>
  );
}
