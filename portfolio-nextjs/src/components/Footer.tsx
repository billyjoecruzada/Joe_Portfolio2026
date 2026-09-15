"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function ContactSection() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
    const orig = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;
    try {
      const fd = new FormData(form);
      const res = await fetch(form.action, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (res.ok) { form.style.display = "none"; document.getElementById("formSuccess")?.classList.add("show"); document.getElementById("formSuccess")?.classList.remove("hidden"); }
      else throw new Error();
    } catch {
      btn.textContent = orig; btn.disabled = false; alert("Something went wrong. Please try again.");
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">Get In Touch</p><h2 className="section-title">Let&apos;s Create Together</h2></div>
        <div className="contact-grid">
          <div className="contact-text reveal">
            <h3>Let&apos;s Create Something Amazing Together</h3>
            <p>Whether you have a clear vision or just a spark of an idea, I&apos;m here to help bring it to life. From brand identities to creative campaigns, let&apos;s collaborate and make your project stand out. Fill out the form or reach out directly. I&apos;m excited to hear about your next big idea!</p>
            <p style={{ marginTop: "16px", color: "var(--text-secondary)" }}>Available for freelance projects, collaborations, and creative partnerships.</p>
            <div className="social-links" id="socialLinks">
              <a href="https://www.instagram.com/ezii_yooow" target="_blank" aria-label="Instagram">IG</a>
              <a href="https://linkedin.com/in/iam-billycruzada/" target="_blank" aria-label="LinkedIn">IN</a>
              <a href="https://behance.net/billyjoeCrzGraphx" target="_blank" aria-label="Behance">BE</a>
              <a href="mailto:billyjoecruzada12@gmail.com" aria-label="Email">@</a>
            </div>
            <div className="telegram-card">
              <div className="telegram-header"><span>Direct Message</span></div>
              <a href="https://t.me/joecrzd" target="_blank" className="telegram-link">@joecrzd</a>
              <a href="tel:+639922416595" className="telegram-phone">+63 992 241 6595</a>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <form className="contact-form" id="contactForm" action="https://formspree.io/f/xeeppykr" method="POST" onSubmit={onSubmit}>
              <div className="form-group"><input type="text" name="name" placeholder=" " autoComplete="name" required /><label>Your Name</label></div>
              <div className="form-group"><input type="email" name="email" placeholder=" " autoComplete="email" required /><label>Email Address</label></div>
              <div className="form-group"><textarea name="message" rows={4} placeholder=" " required /><label>Your Message</label></div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="form-success" id="formSuccess"><h4>Message Sent!</h4><p>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer({ variant = "auto" }: { variant?: "full" | "simple" | "auto" }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showFull = variant === "full" || (variant === "auto" && isHome);
  if (showFull) {
    return (
      <>
        <ContactSection />
        <footer><div className="container"><p>© 2026 Billy Joe Cruzada. All rights reserved.</p><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="back-to-top">Back to top</a></div></footer>
      </>
    );
  }
  return (
    <footer><div className="container"><p>© 2026 Billy Joe Cruzada. All rights reserved.</p><Link href="/" className="back-to-top">← Back to Portfolio</Link></div></footer>
  );
}
