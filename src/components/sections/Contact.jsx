import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!", { id: loadingToast });
        e.target.reset();
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Oops! Something went wrong.", { id: loadingToast });
      });
  };

  return (
    <section
      id="contact"
      className="min-h-[800px] flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full lg:min-w-[750px] max-w-5xl  p-6 sm:p-8 bg-transparent">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 lg:px-6 text-white text-base md:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <input type="hidden" name="from_name" value={formData.name} />
            <input type="hidden" name="title" value={formData.name} />

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 lg:px-6 text-white text-base md:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 lg:px-6 text-white text-base md:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full relative overflow-hidden bg-blue-500 text-white py-3 px-6 rounded font-medium text-base md:text-lg transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-shine" />
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
