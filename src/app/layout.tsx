import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from 'antd/es/layout';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import '@ant-design/v5-patch-for-react-19';

import './styles.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mood & Home - Quotation',
  description: 'Mood & Home interior design quotation',
};

const headerStyle: React.CSSProperties = {
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%', backgroundColor: '#20232f' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout style={{ height: '100%' }}>
          {/* <Header style={headerStyle}></Header> */}
          <Content style={contentStyle}>{children}</Content>
          {/* <Footer style={footerStyle}></Footer> */}
        </Layout>
      </body>
    </html>
  );
}
