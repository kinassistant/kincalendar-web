import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to Our App</h1>
          <p className="text-xl mb-8">Your app's description goes here. Explain the main features and benefits.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-black text-white dark:bg-white dark:text-black font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="border border-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-lg mb-2">Feature One</h3>
              <p>Description of your first amazing feature.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-lg mb-2">Feature Two</h3>
              <p>Description of your second amazing feature.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-lg mb-2">Feature Three</h3>
              <p>Description of your third amazing feature.</p>
            </div>
          </div>
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
