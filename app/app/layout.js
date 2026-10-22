export const metadata = {
  title: 'Just WindowCleaning',
  description: 'Mobile round manager for window cleaners',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
