import "./globals.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { UserProvider } from "../../context/UserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <UserProvider>
          <Header />
          <div className="flex flex-1">
            <Navbar />
            <main className="flex-1 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}