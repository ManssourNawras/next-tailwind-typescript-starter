'use client';

import { Provider } from 'react-redux';

// custom
import { store } from '@/store';
import "@/styles/globals.css";
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header/>
          {children}
          <Footer/>
        </Provider>

      </body>
    </html>
  );
}
