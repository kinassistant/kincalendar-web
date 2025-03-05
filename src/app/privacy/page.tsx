import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Home
          </Link>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            This Privacy Policy describes how we collect, use, and disclose your information when 
            you use our service. We use your data to provide and improve the service. By using the 
            service, you agree to the collection and use of information in accordance with this policy.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Information Collection</h2>
          <p>
            We collect several different types of information for various purposes to provide and 
            improve our service to you.
          </p>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Types of Data Collected</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Personal Data: Email address, first name, last name, phone number, address</li>
            <li>Usage Data: Information on how the service is accessed and used</li>
            <li>Tracking & Cookies Data: Cookies and similar tracking technologies</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Use of Data</h2>
          <p>
            We use the collected data for various purposes:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Retention</h2>
          <p>
            We will retain your personal data only for as long as is necessary for the purposes 
            set out in this Privacy Policy. We will retain and use your personal data to the extent 
            necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Transfer</h2>
          <p>
            Your information, including personal data, may be transferred to — and maintained on — 
            computers located outside of your state, province, country or other governmental jurisdiction 
            where the data protection laws may differ from those of your jurisdiction.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Data Protection Rights</h2>
          <p>
            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the 
            use of your personal data. If you wish to be informed about what personal data we hold 
            about you and if you want it to be removed from our systems, please contact us.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, provide 
            the service on our behalf, perform service-related services, or assist us in analyzing 
            how our service is used.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "last updated" date at the top.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: privacy@yourapp.com
          </p>
        </div>
      </main>
      
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Your App Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
              Terms of Service
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 