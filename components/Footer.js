import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row md:justify-between gap-2">
        <div>© {new Date().getFullYear()} مداد — جميع الحقوق محفوظة</div>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <Link href="/about" className="hover:underline">عن مداد</Link>
          <Link href="/contact" className="hover:underline">تواصل معنا</Link>
        </div>
      </div>
    </footer>
  );
}