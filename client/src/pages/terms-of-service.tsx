import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Celestia Global website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our website, services, and any related software or applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="mb-4">Celestia Global provides the following professional services:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Corporate Crypto Tax Consultation</li>
              <li>Custom SaaS Development</li>
              <li>Asset Management Consulting</li>
              <li>Web 3 Project Development</li>
              <li>Strategic Partnership Facilitation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="mb-4">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of any account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not engage in any fraudulent or illegal activities</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Professional Services Agreement</h2>
            <p>
              Specific terms for professional services will be outlined in separate engagement agreements. These Terms of Service govern general website usage, while service-specific terms will be provided before commencement of any professional engagement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, and intellectual property on this website remain the property of Celestia Global unless otherwise specified. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Copy, reproduce, or distribute our proprietary content</li>
              <li>Use our trademarks without written permission</li>
              <li>Reverse engineer any software or applications</li>
              <li>Create derivative works based on our intellectual property</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
            <p>
              We maintain strict confidentiality standards for all client information and business relationships. Both parties agree to protect confidential information shared during any professional engagement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>
              Celestia Global shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for specific services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Financial and Tax Disclaimers</h2>
            <p className="mb-4">
              Our services are provided for informational and consulting purposes. Please note:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Tax advice is subject to changing regulations</li>
              <li>Investment recommendations do not guarantee returns</li>
              <li>Cryptocurrency markets are volatile and high-risk</li>
              <li>Clients should consult additional professionals as needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services at any time for violations of these terms or for any other reason deemed necessary for business operations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of Canada and the Province of Quebec. Any disputes shall be resolved through binding arbitration in Montreal, Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions regarding these Terms of Service, contact us:
            </p>
            <ul className="list-none">
              <li className="mb-2"><strong>Email:</strong> partners@celestiaholdings.co</li>
              <li className="mb-2"><strong>Location:</strong> Montreal, Canada</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}