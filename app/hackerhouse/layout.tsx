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
    <html lang="en" style={{ background: "#0a0a0a !important" }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          * { background: #0a0a0a !important; }
          body { background: #0a0a0a !important; }
          [class*="fixed"] { display: none !important; }
          [class*="inset"] { display: none !important; }
          video { display: none !important; }
          [style*="background"] { background: #0a0a0a !important; }
        ` }} />
      </head>
      <body style={{ background: "#0a0a0a !important" }}>
        {children}
      </body>
    </html>
  );
}
