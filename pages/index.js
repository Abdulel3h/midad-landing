import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DemoWidget from "../components/DemoWidget";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>مداد — نحو شمول مالي للجميع</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="pt-28 pb-12 px-4">
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-midadBlue mb-4">مداد</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              منصة مالية ذكية تُمكّن ذوي الإعاقة وكبار السن وسكان القرى من الوصول للخدمات البنكية عبر واجهة مبسطة وصوتية ولغة إشارة، وتعمل حتى عند ضعف الشبكة.
            </p>

            <div className="flex gap-3">
              <Link href="/services" className="px-5 py-3 bg-midadBlue text-white rounded">استعرض خدماتنا</Link>
              <Link href="/contact" className="px-5 py-3 border border-midadBlue text-midadBlue rounded">تواصل معنا</Link>
            </div>

            <p className="text-sm text-gray-500 mt-4">جاهزون للعرض الحي في معرض بيبان 25 يوم 7 نوفمبر.</p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <DemoWidget />
            <div className="bg-white p-4 rounded shadow card-hover">
              <h4 className="font-semibold text-midadBlue">خلاصة</h4>
              <p className="text-gray-600 text-sm mt-2">شمول مالي — يعمل في ضعف الانترنت — تكامل مع الجمعيات والبنوك.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}