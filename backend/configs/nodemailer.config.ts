import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import hbs, { NodemailerExpressHandlebarsOptions } from 'nodemailer-express-handlebars';
import { join } from 'path';

const getCredentials = async (): Promise<string | any> => {
  const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENT_ID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI);

  oAuth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  return await oAuth2Client.getAccessToken();
};

export async function sendEmail({ to, subject, template, context }: { to: string; subject: string; template: string; context: Record<string, any> }) {
  const credentials = await getCredentials();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'dhuviuidesigns@gmail.com',
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: credentials,
    },
  });

  const handlebarOptions: NodemailerExpressHandlebarsOptions = {
    viewEngine: {
      extname: '.handlebars',
      partialsDir: join(__dirname, '../src/email'),
      defaultLayout: '',
      layoutsDir: '',
    },
    viewPath: join(__dirname, '../src/email'),
    extName: '.handlebars',
  };

  // Use the Handlebars options with Nodemailer
  transporter.use('compile', hbs(handlebarOptions));

  const options = {
    from: 'dhuviuidesigns@gmail.com',
    to: to,
    subject,
    template,
    context,
  };

  return await transporter.sendMail(options);
}
