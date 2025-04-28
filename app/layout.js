import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"]
})

export const metadata = {
  title: "Goal Roadmap",
  description: "Gamify your goals, achieve more",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${space_grotesk.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
