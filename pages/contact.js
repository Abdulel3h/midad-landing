import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-28 px-4 pb-16 min-h-screen bg-gradient-to-b from-white to-[#f7fbff]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold text-midadBlue mb-4">تواصل معنا</h2>
          <p className="text-gray-600 mb-8">
            يسعدنا تواصلكم معنا عبر البريد أو الهاتف 👋
          </p>

          <div className="grid gap-6">
            {/* مربع البريد الإلكتروني */}
            <a
              href="mailto:hasan.h779900@gmail.com"
              className="block bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition card-hover"
            >
              <h3 className="text-lg font-semibold text-midadBlue mb-1">
                البريد الإلكتروني
              </h3>
              <p className="text-gray-600">hasan.h779900@gmail.com</p>
            </a>

            {/* مربع الاتصال */}
            <a
              href="tel:+966 53 871 4688"
              className="block bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition card-hover"
            >
              <h3 className="text-lg font-semibold text-midadBlue mb-1">
                الاتصال الهاتفي
              </h3>
              <p className="text-gray-600">+966 53 871 4688</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}