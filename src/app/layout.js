import "./globals.css";

export const metadata = {
  title: "Valentines 2026",
  description: "Shaylin sent you a letter! 💌",
  openGraph: {
    images: ["heart.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-100 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}

