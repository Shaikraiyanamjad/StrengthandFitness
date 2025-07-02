// components/ContactDetails.tsx
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="bg-gray-900 text-white p-8 md:p-12">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-300 mb-8">
        Have questions or want to schedule an appointment? Reach out and we&apos;ll get back to you promptly.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Phone className="h-5 w-5 text-[#f36100]" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-400">998-5173-876</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="h-5 w-5 text-[#f36100]" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-400">faiz.strengthandfitness@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 text-[#f36100]" />
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-gray-400">
              PhysioFit – Chiropractic and Physiotherapy Center <br />
              Imran Plaza, 3rd Floor, Road 2, Srinagar Colony Main Rd, Banjara Hills, Hyd, TS 500034
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
