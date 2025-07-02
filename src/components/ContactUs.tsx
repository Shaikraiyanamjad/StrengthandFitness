// app/contact/page.tsx or your main component file
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
  return (
    <section className="bg-gray-50 dark:bg-black py-16 px-4 transition-colors duration-300">
      {/* Heading outside the box */}
      <h2 className="text-4xl font-bold text-center text-[#f36100] dark:text-[#f36100] mb-10">
        Contact Us
      </h2>

      {/* Box with contact components */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
