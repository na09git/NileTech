"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

// "use client";

// import { useSession } from "next-auth/react";
// // import AdminFooter from "@/components/AdminFooter";
// import Footer from "@/components/Footer";
// // import AdminHeader from "@/components/AdminHeader";
// import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
// import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />

//       <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
//         <Providers>
//           {status === "authenticated" && session?.user.role === "admin" ? (
//             <>
//               {/* <AdminHeader /> */}
//               {children}
//               {/* <AdminFooter /> */}
//             </>
//           ) : (
//             <>
//               <Header />
//               {children}
//               <Footer />
//             </>
//           )}
//           <ScrollToTop />
//         </Providers>
//       </body>
//     </html>
//   );
// }

// import { Providers } from "./providers";

// // app/RootLayout.tsx
// "use client";
// import { Providers } from "./providers";
// import { useAuth, AuthProvider } from "@/context/authContext";
// // import UserFooter from "@/components/UserFooter";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// // import AdminHeader from "@/components/AdminHeader";
// import ScrollToTop from "@/components/ScrollToTop";
// import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

// function Layout({ children }) {
//   const { user } = useAuth();

//   if (!user) {
//     return <div>Loadings...</div>; // or a custom loading component
//   }

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
//         <Providers>
//           {user.role === "admin" ? <Header /> : <Header />}
//           {children}
//           {user.role === "admin" ? <Footer /> : <Footer />}
//           <ScrollToTop />
//         </Providers>
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({ children }) {
//   return (
//     <AuthProvider>
//       <Layout>{children}</Layout>
//     </AuthProvider>
//   );
// }

// "use client";

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
// import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />

//       <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
//         <Providers>
//           <Header />
//           {children}
//           <Footer />
//           <ScrollToTop />
//         </Providers>
//       </body>
//     </html>
//   );
// }

// import { Providers } from "./providers";
