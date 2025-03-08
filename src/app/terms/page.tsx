import Link from "next/link";

 
export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Home
          </Link>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <p>
            Thank you for choosing <strong>KIN – Delightful Family Calendar</strong> (&quot;KIN,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). 
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the KIN services, including our website, 
            mobile application(s), and any related features or content (collectively, the &quot;Service&quot;). 
            By using KIN, you agree to these Terms. If you do not agree, you must not use the Service.
          </p>
          
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
            <p><strong>Note:</strong> This document is for informational purposes only and is not legal advice.</p>
          </blockquote>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By creating an account or otherwise using KIN, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms, our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, 
            and any additional policies referenced within. If you do not agree, you must discontinue use immediately.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Eligibility</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">You must be at least the age of majority in your jurisdiction, or have consent from a parent or guardian to use this Service.</li>
            <li className="mb-2">You may use KIN only in compliance with all applicable laws and regulations.</li>
          </ul>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <p className="font-semibold">Account Registration</p>
              <p>You may need to create an account to access certain features. You agree to provide accurate and complete information.</p>
            </li>
            <li className="mb-4">
              <p className="font-semibold">Account Responsibility</p>
              <p>You are responsible for all activity on your account. Keep your login credentials confidential to avoid unauthorized use.</p>
            </li>
            <li className="mb-4">
              <p className="font-semibold">Account Termination</p>
              <p>You may delete your account at any time. We reserve the right to suspend or terminate accounts for violation of these Terms or other improper use.</p>
            </li>
          </ol>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Use of the Service</h2>
          
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <p className="font-semibold">License</p>
              <p>Subject to these Terms, KIN grants you a non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial purposes.</p>
            </li>
            <li className="mb-4">
              <p className="font-semibold">Restrictions</p>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 my-2">
                <li>Reverse engineer, decompile, or disassemble any aspect of the Service.</li>
                <li>Use the Service for any illegal or unauthorized purpose.</li>
                <li>Upload or transmit any harmful code or content that may damage the Service or interfere with other users.</li>
              </ul>
            </li>
            <li className="mb-4">
              <p className="font-semibold">Modifications and Availability</p>
              <p>We may add, change, or remove features at our discretion, and we make no guarantee of continuous, uninterrupted availability.</p>
            </li>
          </ol>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Subscription and Fees</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <p className="font-semibold">Future Subscription</p>
              <p>While KIN may currently be offered for free, we reserve the right to introduce subscription fees or other paid features in the future. Users will be notified of any payment requirements or changes to pricing.</p>
            </li>
          </ul>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. User Content</h2>
          
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <p className="font-semibold">Ownership</p>
              <p>You retain ownership of any content you submit (e.g., calendar events, photos). However, by submitting content through the Service, you grant KIN a worldwide, non-exclusive, royalty-free license to use, store, and process that content as necessary to provide the Service.</p>
            </li>
            <li className="mb-4">
              <p className="font-semibold">Responsibility</p>
              <p>You are solely responsible for any content you submit. You warrant that you have the right to share such content and that it does not violate any laws or third-party rights.</p>
            </li>
          </ol>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            The Service, including all software, text, images, trademarks, and other intellectual property, is owned or licensed by KIN. You may not use our intellectual property without our prior written permission, except as necessary for personal use of the Service.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Data and Privacy</h2>
          <p>
            Our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> explains how we collect, use, store, and protect your personal data. By using KIN, you consent to these data practices.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">9. Disclaimers</h2>
          
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <p className="font-semibold">No Warranties</p>
              <p>The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law, KIN disclaims all warranties of any kind, whether express or implied, including fitness for a particular purpose, merchantability, and non-infringement.</p>
            </li>
            <li className="mb-4">
              <p className="font-semibold">No Guarantee of Accuracy</p>
              <p>KIN does not guarantee the completeness, accuracy, or reliability of any content or features, including calendar entries or scheduling reminders.</p>
            </li>
          </ol>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, KIN, its officers, directors, employees, and agents will not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Service. This includes loss of data, profit, or any other damages, even if we have been advised of the possibility of such damages.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">11. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold KIN harmless from any claims, damages, liabilities, or expenses (including reasonable legal fees) arising from your breach of these Terms or misuse of the Service.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">12. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any time, with or without notice, for any violation of these Terms or other conduct we deem harmful. Upon termination, your license to use the Service ends immediately.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">13. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms and any disputes relating to them will be governed by and construed in accordance with the laws of the State of California. Any legal action must be filed in the appropriate courts of that jurisdiction.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">14. Changes to these Terms</h2>
          <p>
            We may modify these Terms at any time. If changes are material, we will provide notice (e.g., email or prominent notification within the Service). By continuing to use KIN after updates become effective, you agree to the revised Terms.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">15. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms, please reach out:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Email</strong>: owner@fungee.llc</li>
          </ul>
          
          <hr className="my-8" />
          
          <p className="my-6">
            Thank you for using <strong>KIN – Delightful Family Calendar</strong>. We hope this Service helps you stay organized and stress-free.
          </p>
        </div>
      </main>
      
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} KIN – Delightful Family Calendar. All rights reserved.
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