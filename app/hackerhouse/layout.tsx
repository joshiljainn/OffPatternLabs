export const metadata = {
  title: "Hacker House Pune",
  description: "Building something real with people who get it.",
};

export default function HackerHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "transparent" }}>
      <body style={{ background: "transparent" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          [class*="fixed inset-0"] { display: none !important; }
          video { display: none !important; }
        ` }} />
        {children}
      </body>
    </html>
  );
}
