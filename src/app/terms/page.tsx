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
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to App Name. These Terms of Service govern your use of our website and services. 
            By accessing or using our service, you agree to be bound by these terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Services</h2>
          <p>
            Our services are provided "as is" and "as available." We make no warranties, 
            expressed or implied, and hereby disclaim all warranties, including without limitation, 
            implied warranties of merchantability and fitness for a particular purpose.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, 
            complete, and current at all times. Failure to do so constitutes a breach of the Terms, 
            which may result in immediate termination of your account.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the 
            exclusive property of our company and its licensors. The Service is protected by copyright, 
            trademark, and other laws.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws, without regard 
            to its conflict of law provisions.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: support@yourapp.com
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