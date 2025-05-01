export const metadata = {
  title: "Contact Us | Green Travel for All",
  description: "Have a question, suggestion, or media inquiry? Reach out to Green Travel for All directly.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>
        We'd love to hear from you. Whether you're a reader, a brand, or a sustainability partner — 
        reach out any time.
      </p>
      <ul className="space-y-2">
        <li><strong>Email:</strong> info@greentravelforall.org</li>
        <li><strong>Business Inquiries:</strong> partnerships@greentravelforall.org</li>
        <li><strong>Mailing Address:</strong><br />1234 Eco Lane<br />Greenville, NC 27834</li>
      </ul>
    </div>
  )
}