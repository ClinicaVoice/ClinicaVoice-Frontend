/**
 * ClinicaVoice AWS Amplify Configuration – v6 Modular Format
 * ----------------------------------------------------------
 * This file securely connects your frontend to AWS Cognito (Auth),
 * API Gateway + Lambda (Backend), and S3 (Storage).
 * Replace the placeholder values below with your actual AWS resource IDs.
 */

/* import { Amplify } from "aws-amplify";

// ✅ Modular Amplify v6 Configuration
Amplify.configure({
  Auth: {
    Cognito: {
      // --- USER AUTHENTICATION ---
      userPoolId: "ca-central-1_XXXXXXX",             // 🔹 Replace with your Cognito User Pool ID
      userPoolClientId: "XXXXXXXXXXXXXXXXXXXXXXXXXX", // 🔹 Replace with your App Client ID
      identityPoolId: "ca-central-1:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", // optional
      signUpVerificationMethod: "code",
      loginWith: { email: true },

      // --- OPTIONAL OAUTH (for future SSO / Hosted UI) ---
      oauth: {
        domain: "clinicavoice.auth.ca-central-1.amazoncognito.com",
        scope: ["email", "openid", "profile"],
        redirectSignIn: "http://localhost:5173/",
        redirectSignOut: "http://localhost:5173/",
        responseType: "code",
      },
    },
  },

  // ✅ API Gateway (ClinicaVoice backend)
  API: {
    endpoints: [
      {
        name: "ClinicaVoiceAPI",
        endpoint: "https://xxxxxx.execute-api.ca-central-1.amazonaws.com/prod",
        region: "ca-central-1",
      },
    ],
  },

  // ✅ Amazon S3 (Voice upload + transcript storage)
  Storage: {
    S3: {
      bucket: "clinicavoice-audio-storage", // 🔹 Replace with your S3 bucket name
      region: "ca-central-1",
    },
  },

  // ✅ Optional Logging (disable in production)
  Logging: {
    level: "info",
  },
});

console.log("✅ Amplify configured successfully (ClinicaVoice v6)");
 */

// amplifyConfig.js
// amplifyConfig.js

// amplifyConfig.js

// amplifyConfig.js

// amplifyConfig.js

// amplifyConfig.js
// Vite-compatible way to import Amplify + Auth
let Auth;

async function configureAmplify() {
  const amplify = await import("aws-amplify");
  Auth = amplify.default.Auth; // Access Auth from the default export

  const awsConfig = {
    Auth: {
      region: "local",
      userPoolId: "local_pool",
      userPoolWebClientId: "local_client",
      oauth: undefined, // disable OAuth
    },
  };

  amplify.default.Amplify.configure(awsConfig);

  // ===== MOCK AUTH METHODS =====
  Auth.signIn = async (email, password) => {
    console.log("Mock signIn called:", { email, password });
    const user = { email };
    sessionStorage.setItem("clinica_user", JSON.stringify(user));
    sessionStorage.setItem("clinica_token", "authenticated");
    return user;
  };

  Auth.signOut = async () => {
    console.log("Mock signOut called");
    sessionStorage.removeItem("clinica_user");
    sessionStorage.removeItem("clinica_token");
  };

  Auth.currentAuthenticatedUser = async () => {
    const user = sessionStorage.getItem("clinica_user");
    if (user) return JSON.parse(user);
    throw new Error("No user logged in");
  };

  Auth.federatedSignIn = async () => {
    console.log("Mock federatedSignIn called");
  };

  return { Auth };
}

// Export a function that returns Auth
export default configureAmplify;
