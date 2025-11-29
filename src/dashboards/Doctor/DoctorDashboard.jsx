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
  Chip,
  Stack,
  LinearProgress,
} from "@mui/material";

import { Mic, Stop, PlayArrow } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import DoctorLayout from "../../layouts/DoctorLayout";

export default function DoctorDashboard() {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState("dashboard");

  // Upload states
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  // Recording states
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordedAudioURL, setRecordedAudioURL] = useState(null);

  // Filters & selections
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientSearch, setPatientSearch] = useState("");

  // Example dashboard data
  const stats = {
    myPatients: 32,
    completedReports: 118,
    pendingReviews: 5,
    recentUploads: 7,
  };

  const patients = [
    { id: 1, name: "John Doe", lastVisit: "2025-11-20", reports: 4 },
    { id: 2, name: "Jane Roe", lastVisit: "2025-11-18", reports: 2 },
    { id: 3, name: "Ali Hassan", lastVisit: "2025-11-10", reports: 6 },
  ];

  const reports = [
    {
      id: 1,
      patient: "John Doe",
      date: "2025-11-24",
      summary: "Chest pain, rule out MI.",
      status: "review",
    },
    {
      id: 2,
      patient: "Jane Roe",
      date: "2025-11-23",
      summary: "Chronic migraine follow-up.",
      status: "signed",
    },
    {
      id: 3,
      patient: "Ali Hassan",
      date: "2025-11-22",
      summary: "Post-op review — knee replacement.",
      status: "draft",
    },
  ];

  // ------------- FILE UPLOAD ------------- //
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setUploadStatus("idle");
    setUploadProgress(0);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setUploadStatus("uploading");
    setUploadProgress(10);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus("done");

          setTimeout(() => {
            setSelectedFile(null);
            setUploadStatus("idle");
            setUploadProgress(0);
          }, 1500);

          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  // ------------- AUDIO RECORDING ------------- //
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const recorder = new MediaRecorder(stream);
      let chunks = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);

        setAudioBlob(blob);
        setRecordedAudioURL(url);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone permission denied", err);
      alert("Microphone access denied. Please enable microphone permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const uploadRecordedAudio = () => {
    if (!audioBlob) return alert("No audio recorded.");

    const file = new File([audioBlob], "recording.webm", { type: "audio/webm" });
    console.log("Uploading recorded file:", file);

    setSelectedFile(file);
    handleUpload();
  };

  // ------------- FILTERS ------------- //
  const filteredPatients = patients.filter((p) =>
    !patientSearch.trim()
      ? true
      : p.name.toLowerCase().includes(patientSearch.toLowerCase())
  );

  const filteredReports =
    statusFilter === "all"
      ? reports
      : reports.filter((r) => r.status === statusFilter);

  // ---------------------------------------------------------------
  // -------------------------- SECTIONS ----------------------------
  // ---------------------------------------------------------------

  const renderDashboardOverview = () => (
    <Box sx={{ mt: "20px" }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        {t("doctor_dashboard_title")}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {t("doctor_dashboard_subtitle")}
      </Typography>

      {/* Stats */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[ 
          ["card_myPatients", stats.myPatients],
          ["card_completedReports", stats.completedReports],
          ["card_pendingReviews", stats.pendingReviews],
          ["card_recentUploads", stats.recentUploads],
        ].map(([label, value]) => (
          <Grid item xs={12} sm={6} md={3} key={label}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  {t(label)}
                </Typography>
                <Typography variant="h5">{value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upload + Recording */}
      <Grid container spacing={3}>
        {/* Upload */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {t("doctor_uploadTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {t("doctor_uploadSubtitle")}
              </Typography>

              <Button variant="outlined" component="label" sx={{ mb: 1.5 }}>
                {t("doctor_chooseFile")}
                <input hidden type="file" accept="audio/*" onChange={handleFileChange} />
              </Button>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {selectedFile ? selectedFile.name : t("doctor_noFileSelected")}
              </Typography>

              {uploadStatus === "uploading" && (
                <Box sx={{ mb: 2 }}>
                  <LinearProgress variant="determinate" value={uploadProgress} sx={{ height: 8, borderRadius: 4 }} />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                    {t("doctor_upload_inProgress")}
                  </Typography>
                </Box>
              )}

              {uploadStatus === "done" && (
                <Typography variant="caption" color="success.main" sx={{ display: "block", mb: 1.5 }}>
                  {t("doctor_upload_done")}
                </Typography>
              )}

              <Button variant="contained" disabled={!selectedFile || uploadStatus === "uploading"} onClick={handleUpload}>
                {t("doctor_upload")}
              </Button>

              {/* Recording Section */}
              <Box sx={{ mt: 3, p: 2, borderRadius: 2, bgcolor: "#F3F4F6" }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  {t("doctor_recordAudio")}
                </Typography>

                {!isRecording ? (
                  <Button variant="contained" color="secondary" startIcon={<Mic />} onClick={startRecording} sx={{ mb: 1 }}>
                    {t("doctor_startRecording")}
                  </Button>
                ) : (
                  <Button variant="contained" color="error" startIcon={<Stop />} onClick={stopRecording} sx={{ mb: 1 }}>
                    {t("doctor_stopRecording")}
                  </Button>
                )}

                {recordedAudioURL && (
                  <Box sx={{ mt: 2 }}>
                    <audio controls src={recordedAudioURL} style={{ width: "100%" }} />

                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 1 }}
                      onClick={uploadRecordedAudio}
                    >
                      {t("doctor_uploadRecording")}
                    </Button>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Reports */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6">{t("doctor_recentReports")}</Typography>

                <Stack direction="row" spacing={1}>
                  {[
                    ["all", t("filter_all")],
                    ["review", t("doctor_filter_review")],
                    ["signed", t("doctor_filter_signed")],
                    ["draft", t("doctor_filter_draft")],
                  ].map(([key, label]) => (
                    <Chip
                      key={key}
                      label={label}
                      size="small"
                      clickable
                      color={statusFilter === key ? "primary" : "default"}
                      onClick={() => setStatusFilter(key)}
                    />
                  ))}
                </Stack>
              </Stack>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>{t("admin_column_patient")}</TableCell>
                    <TableCell>{t("admin_column_date")}</TableCell>
                    <TableCell>{t("doctor_column_summary")}</TableCell>
                    <TableCell>{t("admin_column_status")}</TableCell>
                    <TableCell>{t("admin_column_actions")}</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredReports.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell>{r.patient}</TableCell>
                      <TableCell>{r.date}</TableCell>
                      <TableCell>{r.summary}</TableCell>
                      <TableCell>
                        <Chip
                          size="small"
                          label={
                            r.status === "review"
                              ? t("doctor_status_review")
                              : r.status === "signed"
                              ? t("doctor_status_signed")
                              : t("doctor_status_draft")
                          }
                          color={
                            r.status === "signed"
                              ? "success"
                              : r.status === "review"
                              ? "warning"
                              : "default"
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined">
                          {t("doctor_viewFullReport")}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {filteredReports.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <Typography variant="body2" color="text.secondary">
                          {t("doctor_noReports")}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  // ---------------------------------------------------------------

  const renderPatients = () => (
    <Box sx={{ mt: "20px" }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        {t("doctor_patientList")}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                placeholder={t("doctor_search_patient")}
                value={patientSearch}
                onChange={(e) => setPatientSearch(e.target.value)}
              />

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>{t("admin_patientName")}</TableCell>
                    <TableCell>{t("doctor_column_lastVisit")}</TableCell>
                    <TableCell>{t("doctor_column_reports")}</TableCell>
                    <TableCell>{t("doctor_column_patientProfile")}</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredPatients.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell>{p.name}</TableCell>
                      <TableCell>{p.lastVisit}</TableCell>
                      <TableCell>{p.reports}</TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined" onClick={() => setSelectedPatient(p)}>
                          {t("doctor_viewPatient")}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {filteredPatients.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        <Typography variant="body2" color="text.secondary">
                          {t("doctor_noPatients")}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        {/* Patient Detail */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                {t("doctor_patientSummary")}
              </Typography>

              {selectedPatient ? (
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    {selectedPatient.name}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {t("doctor_column_lastVisit")}: {selectedPatient.lastVisit}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {t("doctor_summary_reports")}: {selectedPatient.reports}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {t("doctor_patientSummary_placeholder")}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {t("doctor_noPatientSelected")}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  // ---------------------------------------------------------------

  const renderSettings = () => (
    <Box sx={{ mt: "20px" }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        {t("doctor_settings_title")}
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {t("doctor_settings_future")}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  // ---------------------------------------------------------------

  return (
    <DoctorLayout active={activeNav} onNavChange={setActiveNav}>
      {activeNav === "dashboard" && renderDashboardOverview()}
      {activeNav === "patients" && renderPatients()}
      {activeNav === "upload" && renderDashboardOverview()}
      {activeNav === "reports" && renderDashboardOverview()}
      {activeNav === "settings" && renderSettings()}
    </DoctorLayout>
  );
}
