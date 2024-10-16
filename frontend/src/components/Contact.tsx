export default function Contact() {
  return (
    <>
      <main>
        <section id="contact">
          <h2>Contact Us</h2>
          <form id="contactForm">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              aria-label="Your Message"
            />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
