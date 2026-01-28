import './globals.css'

export const metadata = {
    title: "Подготовка к лабораторным работам по физике",
    description: "Подготовка к лабораторным работам по физике",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
