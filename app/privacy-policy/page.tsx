export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At Green Travel for All, your privacy is critically important to us.
      </p>
      <p className="mb-4">
        This policy outlines what information we collect, how we use it, and the choices you have regarding your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information (like name and email) you provide when subscribing to our newsletter or contacting us.</li>
        <li>Anonymous usage data (e.g. pages visited, IP address, browser type) for analytics purposes.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To respond to your inquiries</li>
        <li>To send occasional updates (if you subscribe)</li>
        <li>To improve the website experience and analyze usage</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance site performance and analyze traffic. You can disable cookies in your browser settings at any time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party analytics tools (like Google Analytics) which collect data in accordance with their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        If you’re a resident of California (CCPA) or the EU (GDPR), you have the right to request access to your data or ask for deletion by emailing us.
      </p>

      <p className="text-sm text-gray-500">
        Last updated: May 1, 2025
      </p>
    </div>
  );
}