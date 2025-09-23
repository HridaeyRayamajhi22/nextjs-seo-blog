import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";

export default function Contact() {
  return (
    <section className="w-full min-h-[75vh] border-b-2 border-solid border-dark flex flex-col lg:flex-row items-center justify-center text-dark">
      
      {/* Left Side - Bigger Animation */}
      <div className="w-full lg:w-1/2 flex items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-dark p-4">
        <div className="w-4/5 lg:w-[90%] h-auto">
          <LottieAnimation />
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
}
