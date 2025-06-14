import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Compliance() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Compliance Statement</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Regulatory Compliance Overview</h2>
            <p>
              Celestia Global maintains strict compliance with applicable Canadian federal and provincial regulations governing financial services, data protection, and professional consulting services. Our compliance framework ensures we meet all legal requirements while serving our clients' interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Financial Services Compliance</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Canadian Securities Regulations</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Compliance with provincial securities commissions requirements</li>
              <li>Adherence to National Instrument 31-103 (Registration Requirements)</li>
              <li>Investment advice provided within regulatory framework</li>
              <li>Client suitability assessments for investment recommendations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Anti-Money Laundering (AML)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Proceeds of Crime (Money Laundering) and Terrorist Financing Act compliance</li>
              <li>Know Your Customer (KYC) procedures</li>
              <li>Suspicious transaction reporting protocols</li>
              <li>Record keeping requirements for financial transactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cryptocurrency and Digital Assets</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Canadian Cryptocurrency Regulations</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Canada Revenue Agency (CRA) cryptocurrency tax guidelines</li>
              <li>Financial Transactions and Reports Analysis Centre (FINTRAC) requirements</li>
              <li>Provincial Money Services Business (MSB) registration where applicable</li>
              <li>Digital asset custody and security standards</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Tax Compliance</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Income Tax Act compliance for crypto transactions</li>
              <li>GST/HST obligations for digital services</li>
              <li>Provincial tax requirements across Canada</li>
              <li>International tax treaty considerations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection and Privacy</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Canadian Privacy Laws</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
              <li>Provincial privacy legislation (Quebec's Bill 64, BC PIPA, Alberta PIPA)</li>
              <li>Data breach notification requirements</li>
              <li>Cross-border data transfer protocols</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">International Standards</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>GDPR compliance for European clients</li>
              <li>CCPA compliance for California residents</li>
              <li>ISO 27001 information security management principles</li>
              <li>SOC 2 Type II security framework adherence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Standards</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Consulting Services</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Professional liability insurance coverage</li>
              <li>Continuing professional development requirements</li>
              <li>Ethical standards and conflict of interest policies</li>
              <li>Client confidentiality and fiduciary duties</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Technology Services</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Software development lifecycle compliance</li>
              <li>Data security and encryption standards</li>
              <li>Quality assurance and testing protocols</li>
              <li>Intellectual property protection measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Risk Management Framework</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Operational Risk Controls</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Business continuity and disaster recovery planning</li>
              <li>Cybersecurity incident response procedures</li>
              <li>Third-party vendor risk assessment</li>
              <li>Regular compliance monitoring and reporting</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Financial Risk Management</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Client fund segregation requirements</li>
              <li>Capital adequacy maintenance</li>
              <li>Market risk assessment and mitigation</li>
              <li>Liquidity risk management</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Audit and Monitoring</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Internal Controls</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Regular internal compliance audits</li>
              <li>Management oversight and review processes</li>
              <li>Employee training and certification programs</li>
              <li>Compliance testing and validation procedures</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">External Oversight</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Independent third-party audits</li>
              <li>Regulatory examination cooperation</li>
              <li>Professional association compliance reviews</li>
              <li>Client feedback and complaint resolution processes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Regulatory Relationships</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Canadian Regulatory Bodies</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Canada Revenue Agency (CRA)</li>
              <li>Financial Transactions and Reports Analysis Centre (FINTRAC)</li>
              <li>Investment Industry Regulatory Organization of Canada (IIROC)</li>
              <li>Canadian Securities Administrators (CSA)</li>
              <li>Office of the Privacy Commissioner of Canada</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Provincial Regulators</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Autorité des marchés financiers (AMF) - Quebec</li>
              <li>Ontario Securities Commission (OSC)</li>
              <li>British Columbia Securities Commission (BCSC)</li>
              <li>Alberta Securities Commission (ASC)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance Reporting</h2>
            <p className="mb-4">
              Celestia Global maintains comprehensive compliance reporting including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Annual compliance certifications</li>
              <li>Quarterly risk assessments</li>
              <li>Monthly transaction monitoring reports</li>
              <li>Incident reporting and remediation tracking</li>
              <li>Regulatory correspondence and responses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Client Responsibilities</h2>
            <p className="mb-4">
              Clients engaging our services agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Maintain confidentiality of sensitive information</li>
              <li>Report any compliance concerns or violations</li>
              <li>Cooperate with regulatory inquiries as needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Updates and Changes</h2>
            <p>
              This compliance statement is reviewed annually and updated as necessary to reflect changes in regulations, business operations, or industry standards. Material changes will be communicated to clients and stakeholders.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="mb-4">
              For compliance-related questions or concerns:
            </p>
            <ul className="list-none">
              <li className="mb-2"><strong>Email:</strong> partners@celestiaholdings.co</li>
              <li className="mb-2"><strong>Subject Line:</strong> Compliance Inquiry</li>
              <li className="mb-2"><strong>Location:</strong> Montreal, Canada</li>
            </ul>
            <p className="mt-4">
              All compliance inquiries will be handled confidentially and responded to within 2 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}