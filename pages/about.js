"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 7000000;
    const duration = 2500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 50000; // القفز بمقدار ثابت لسرعة العد
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-28 px-4 pb-20 bg-gradient-to-b from-white to-[#f7fbff] fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-midadBlue mb-4">
            عن <span className="text-[#f6b042]">مداد</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            مداد هي منصة مالية مبتكرة تهدف إلى *تحقيق الشمول المالي الحقيقي في السعودية*،
            عبر تمكين الفئات غير المخدومة ماليًا, مثل <strong>ذوي الإعاقة، وكبار السن، وسكان القرى النائية</strong>  
            من الوصول السهل إلى الخدمات البنكية والمالية من مكان واحد.
            <br />
            نوفّر تجربة رقمية مبسطة، مدعومة بالمساعد الصوتي ولغة الإشارة، 
            مع شراكات استراتيجية مع البنوك والجمعيات لدعم الأثر الاجتماعي والاستدامة.
          </p>

          {/* العداد */}
          <div className="mt-10 bg-white inline-block px-8 py-6 rounded-2xl shadow-md border border-gray-100 transform transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-5xl font-bold text-midadBlue mb-1">
              {count.toLocaleString("ar-EG")}
            </p>
            <p className="text-gray-600 text-lg font-medium">
              شخص مستفيد محتمل من خدمات مداد
            </p>
          </div>

          <p className="text-gray-500 mt-4 text-sm">
            وفقًا لتقارير الهيئة العامة للإحصاء والبنك المركزي السعودي 2024
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}