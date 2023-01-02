const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

// Scopes allows you to set access levels like readonly etc
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// Credentials are those values required to get access to your calendar

console.log(process.env.CLIENT_ID);
console.log(process.env.PROJECT_ID);
console.log(process.env.CLIENT_SECRET);
console.log(process.env.CALENDAR_ID);

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://coleaiseosa.github.io/meet"],
  javascript_origins: ["https://coleaiseosa.github.io", "http://localhost:3000"],
};

const {client_secret, client_id, redirect_uris, calendar_id} = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  // the values used to instantiate the OAuth Client are at the top of the file
  const oAuthClient = new google.auth.Oauth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // to decode authorization code extracted from the URL queryS
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
  .then((token) => {
    // respond with OAuth token
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(token),
    };
  })
  .catch((err) => {
    console.error(err);
    return{
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(err),
    };
  });
};