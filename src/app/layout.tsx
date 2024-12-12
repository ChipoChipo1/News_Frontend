import StyledComponentsRegistry from "@/lib/registry";
import Nav from "./_components/Nav/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Nav />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
