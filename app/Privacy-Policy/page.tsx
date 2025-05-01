export const metadata = {
  title: "Privacy Policy | Green Travel for All",
  description: "Read our full Privacy Policy to understand how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>Last updated: May 1, 2025</p>

      <p>
        At Green Travel for All, your privacy is critically important to us. This Privacy Policy describes how 
        we collect, use, and protect your information in accordance with applicable U.S. laws, including the CCPA and GDPR for our visitors.
      </p>

      <h2 className="text-xl font-semibold">Information We Collect</h2>
      <ul className="list-disc list-inside">
        <li>Personal information (name, email) if you subscribe or contact us</li>
        <li>Usage data (pages visited, time on site, etc.) via cookies and analytics</li>
      </ul>

      <h2 className="text-xl font-semibold">How We Use Your Information</h2>
      <ul className="list-disc list-inside">
        <li>To send newsletters (if you subscribe)</li>
        <li>To improve website performance and user experience</li>
        <li>To respond to messages or inquiries</li>
      </ul>

      <h2 className="text-xl font-semibold">Cookies</h2>
      <p>
        We use cookies to track traffic and behavior anonymously through Google Analytics or similar services. 
        You can disable cookies in your browser at any time.
      </p>

      <h2 className="text-xl font-semibold">Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your data. To make a request, contact us at <strong>privacy@greentravelforall.org</strong>.
      </p>

      <h2 className="text-xl font-semibold">Third-Party Services</h2>
      <p>
        We may use third-party services like email platforms or analytics providers. These services may collect data under their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold">Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at <strong>privacy@greentravelforall.org</strong>.
      </p>
    </div>
  )
}