import Head from 'next/head';
import './globals.css'; 
import { Libre_Baskerville } from '@next/font/google';

export const metadata = {
  title: "The photographer",
  description: "The Professional PhotoGrapher",
};

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={libreBaskerville.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
