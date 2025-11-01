// /* import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import { signUp } from "aws-amplify/auth";
// import Auth from "./mockAuth"; // use the same local mock


// export default function Register() {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   /* const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);
//     try {
//       await signUp({
//         username: form.email,
//         password: form.password,
//         options: {
//           userAttributes: { name: form.name, email: form.email },
//         },
//       });
//       setSuccess(t("signup_success"));
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       console.error("Registration failed:", err);
//       setError(t("signup_error"));
//     } finally {
//       setLoading(false);
//     }
//   }; */
 


//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "90vh",
//         backgroundColor: "#F9FAFB",
//       }}
//     >
//       <Paper sx={{ p: 4, width: 400, boxShadow: 4, borderRadius: 2 }}>
//         <Typography variant="h4" fontWeight={600} textAlign="center" mb={2}>
//           {t("signup_title")}
//         </Typography>

//         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             name="name"
//             label={t("signup_name")}
//             variant="outlined"
//             margin="normal"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             name="email"
//             label={t("signup_email")}
//             variant="outlined"
//             margin="normal"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             name="password"
//             label={t("signup_password")}
//             variant="outlined"
//             type="password"
//             margin="normal"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, py: 1.5, textTransform: "none" }}
//             type="submit"
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} color="inherit" /> : t("signup_button")}
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// }
 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import Auth from "./mockAuth"; // your mock Auth file

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Pass form values to mock Auth
      const user = await Auth.signUp({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      console.log("Registered user:", user);

      setSuccess(t("signup_success"));
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error("Registration failed:", err);
      setError(t("register_error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundColor: "#F9FAFB",
      }}
    >
      <Paper sx={{ p: 4, width: 400, boxShadow: 4, borderRadius: 2 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          {t("signup_title")}
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label={t("signup_name")}
            variant="outlined"
            margin="normal"
            value={form.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            name="email"
            label={t("signup_email")}
            variant="outlined"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            name="password"
            label={t("signup_password")}
            variant="outlined"
            type="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, py: 1.5, textTransform: "none" }}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              t("signup_button")
            )}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
