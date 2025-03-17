import "bootstrap/dist/css/bootstrap.min.css";
import HeaderPage from '@/components/header/header';
import './globals.css';
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: 'Manufaktur Solutions – Industry and Factory Theme',
  description: 'Manufaktur Solutions – Industry and Factory Theme',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        </body>
    </html>
  );
}
