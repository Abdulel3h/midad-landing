import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const items = [
    { title: "فتح حساب رقمي مبسّط", desc: "تسجيل صوتي/بصمة/PIN مع عمل في ضعف الانترنت" },
    { title: "لوحة جمعيات", desc: "إدارة المستفيدين وتحويلات شفافة" },
    { title: "مساعد ذكي صوتي", desc: "إرشاد صوتي وقوائم مساعدة بلغة الإشارة" },
    { title: "تقارير مرئية", desc: "تقارير مصفوفة جاهزة للجهات الممولة" }
  ];
  return (
    <>
      <Navbar />
      <main className="pt-28 px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-midadBlue mb-6">خدماتنا</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow card-hover">
                <h3 className="font-semibold text-lg text-midadBlue">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}