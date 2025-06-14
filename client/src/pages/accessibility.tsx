import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Accessibility Statement</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Accessibility</h2>
            <p>
              Celestia Global is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Conformance Status</h2>
            <p className="mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
            </p>
            <p>
              Our website has been designed and developed with accessibility in mind, incorporating features such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Semantic HTML structure for screen readers</li>
              <li>Keyboard navigation support</li>
              <li>High contrast color schemes</li>
              <li>Descriptive alt text for images</li>
              <li>Clear heading hierarchy</li>
              <li>Focus indicators for interactive elements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Accessibility Features</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Visual Accessibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>High contrast ratios between text and background colors</li>
              <li>Resizable text up to 200% without loss of functionality</li>
              <li>Alternative text for all meaningful images</li>
              <li>Clear visual focus indicators</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Motor Accessibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Full keyboard navigation support</li>
              <li>Sufficient target sizes for clickable elements</li>
              <li>No time limits on interactions</li>
              <li>Accessible drag and drop alternatives</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Cognitive Accessibility</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Clear and consistent navigation</li>
              <li>Simple, jargon-free language where possible</li>
              <li>Logical content structure and flow</li>
              <li>Error prevention and clear error messages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Assistive Technology Compatibility</h2>
            <p className="mb-4">Our website is designed to be compatible with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Voice recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Screen magnification software</li>
              <li>Switch navigation devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Known Limitations</h2>
            <p className="mb-4">
              While we strive for full accessibility, we acknowledge that some areas may not yet meet all accessibility standards. We are actively working to address these limitations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>Complex data visualizations may require alternative text descriptions</li>
              <li>PDF documents are being updated for better accessibility</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Assessment Methods</h2>
            <p className="mb-4">
              Celestia Global assessed the accessibility of this website using the following methods:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Self-evaluation using automated accessibility testing tools</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Screen reader testing</li>
              <li>Color contrast analysis</li>
              <li>User testing with individuals with disabilities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ongoing Improvements</h2>
            <p>
              We are committed to continuously improving accessibility. Our efforts include regular accessibility audits, staff training on accessibility best practices, and incorporating user feedback to enhance the experience for all visitors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Content</h2>
            <p>
              Some content on our website may be provided by third-party services. While we encourage our partners to maintain accessibility standards, we cannot guarantee the accessibility of all third-party content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Feedback and Contact Information</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="list-none">
              <li className="mb-2"><strong>Email:</strong> partners@celestiaholdings.co</li>
              <li className="mb-2"><strong>Subject Line:</strong> Website Accessibility</li>
              <li className="mb-2"><strong>Location:</strong> Montreal, Canada</li>
            </ul>
            <p className="mt-4">
              We aim to respond to accessibility feedback within 3 business days and will work with you to provide the information or service you need in an accessible format.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Legal Compliance</h2>
            <p>
              This accessibility statement demonstrates our commitment to digital inclusion and compliance with applicable accessibility laws and regulations, including the Accessibility for Ontarians with Disabilities Act (AODA) and similar provincial legislation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}