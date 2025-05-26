// app/page.tsx
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
    userAgent,
  );

  const mobileLink =
    process.env.MOBILE_REDIRECT_URL || "https://default-mobile.com";

  if (isMobile) {
    redirect(mobileLink); // ✅ Redirect mobile to dynamic link
  } else {
    redirect("https://facebook.com"); // ✅ Desktop opens Facebook
  }

  return null;
}
