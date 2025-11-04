import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-midadBlue flex items-center justify-center text-white font-bold">م</div>
          <div>
            <div className="text-midadBlue font-semibold">مداد</div>
            <div className="text-xs text-gray-500"> نحو شمول مالي للجميع </div>
          </div>
        </div>

        <div className="flex gap-6 items-center text-sm">
          <Link href="/" className="text-gray-700 hover:text-midadBlue">الرئيسية</Link>
          <Link href="/services" className="text-gray-700 hover:text-midadBlue">خدماتنا</Link>
          <Link href="/about" className="text-gray-700 hover:text-midadBlue">عن مداد</Link>
          <Link href="/contact" className="px-4 py-2 bg-midadBlue text-white rounded">تواصل معنا</Link>
        </div>
      </div>
    </nav>
  );
}