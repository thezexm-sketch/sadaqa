import type { Metadata, Viewport } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SoundProvider } from "@/context/SoundContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#064e3b" },
    { media: "(prefers-color-scheme: dark)", color: "#071510" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "صدقة جارية عن روحي المرحومين الحاج عوض إبراهيم رمضان شعلة والحاج محمد سويلم",
  description:
    "موقع صدقة جارية إسلامي عن روحي المرحومين الحاج عوض إبراهيم رمضان شعلة والحاج محمد سويلم - يشمل المسبحة الإلكترونية التفاعلية، سور القرآن الكريم مع التلاوة الصوتية المتصلة، الأحاديث الشريفة، والأدعية المأثورة.",
  keywords: [
    "صدقة جارية",
    "الحاج عوض إبراهيم رمضان شعلة",
    "الحاج محمد سويلم",
    "عوض شعلة",
    "محمد سويلم",
    "تسبيح",
    "مسبحة إلكترونية",
    "قرآن كريم",
    "دعاء للميت",
    "أذكار",
  ],
  openGraph: {
    title: "صدقة جارية عن روحي المرحومين الحاج عوض إبراهيم رمضان شعلة والحاج محمد سويلم",
    description:
      "ساهم معنا في قراءة القرآن والتسبيح والدعاء وإهداء ثوابه لروحي المرحومين الحاج عوض إبراهيم رمضان شعلة والحاج محمد سويلم. الدال على الخير كفاعله.",
    type: "website",
    locale: "ar_EG",
    siteName: "صدقة جارية - الحاج عوض شعلة والحاج محمد سويلم",
  },
  twitter: {
    card: "summary_large_image",
    title: "صدقة جارية عن روحي المرحومين الحاج عوض إبراهيم رمضان شعلة والحاج محمد سويلم",
    description: "شاركنا الأجر بالتسبيح وقراءة القرآن والدعاء للمرحومين الحاج عوض شعلة والحاج محمد سويلم.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${amiri.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <SoundProvider>
            {children}
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
