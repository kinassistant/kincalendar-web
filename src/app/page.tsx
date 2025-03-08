import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/kin-logo.svg" alt="Kin Logo" width={28} height={28} className="mr-2" />
          <span className="font-semibold text-lg">KIN</span>
        </div>
        <Link 
          href="https://apps.apple.com/app/kin-calendar" 
          className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Get KIN
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="max-w-xl w-full mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 text-purple-600">
              The Future of Family Scheduling
            </h1>
            <p className="text-lg text-gray-600 italic max-w-md mx-auto">
              &ldquo;Finally! A family calendar app that actually helps rather than just creates more stress.&rdquo;
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <Link 
              href="https://apps.apple.com/app/kin-calendar" 
              className="bg-black text-white flex items-center justify-center px-6 py-3 rounded-full gap-2 font-medium hover:bg-gray-800 transition-colors"
            >
              <Image src="/apple-logo.svg" alt="Apple Logo" width={20} height={20} />
              Download on the App Store
            </Link>
          </div>

          <div className="mb-16 flex justify-center">
            <div className="max-w-[300px] mx-auto">
              <Image 
                src="/app-screenshot.png" 
                alt="KIN App Screenshot" 
                className="rounded-3xl shadow-lg w-full h-auto"
                width={300}
                height={600}
              />
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-8 text-center">KIN makes family scheduling...</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-5 rounded-xl flex flex-col items-center text-center hover:shadow-sm transition-shadow">
                <div className="flex justify-center items-center mb-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-medium text-base mb-1">Collaborative</h3>
                <p className="text-sm text-gray-600">Share events with family members in real-time</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl flex flex-col items-center text-center hover:shadow-sm transition-shadow">
                <div className="flex justify-center items-center mb-3">
                  <span className="text-2xl">👆</span>
                </div>
                <h3 className="font-medium text-base mb-1">Simple</h3>
                <p className="text-sm text-gray-600">Create events with just 1 tap</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl flex flex-col items-center text-center hover:shadow-sm transition-shadow">
                <div className="flex justify-center items-center mb-3">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-medium text-base mb-1">Designed for Families</h3>
                <p className="text-sm text-gray-600">Built to handle complex family schedules</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Latest Updates</h2>
              <span className="text-xs text-gray-500">From KIN v1.0</span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium">Family calendar</h3>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">New</span>
                </div>
                <p className="text-sm text-gray-600">Share and manage events across your family members</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium">Smart reminders</h3>
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs">Update</span>
                </div>
                <p className="text-sm text-gray-600">Get timely notifications for upcoming events</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium">Event creation</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Fix</span>
                </div>
                <p className="text-sm text-gray-600">Create events more quickly with improved UI</p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6 text-center">The Story Behind KIN</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-3 text-sm">
                KIN was created by parents who were tired of complex family scheduling apps. We built what we wanted ourselves: a simple, fast way to keep track of everyone&apos;s schedules.
              </p>
              <p className="text-center text-xs text-gray-500">KIN Founders</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium mb-2">How much does KIN cost?</h3>
                <p className="text-sm text-gray-600">KIN is free to download with core features available to all users. Premium features are available via subscription.</p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium mb-2">Is my data secure with KIN?</h3>
                <p className="text-sm text-gray-600">Yes! We use industry-standard encryption and never share your personal data with third parties.</p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium mb-2">How many family members can I add?</h3>
                <p className="text-sm text-gray-600">You can add up to 8 family members on the free plan, and unlimited on our premium plan.</p>
              </div>
            </div>
          </section>

          <div className="bg-purple-600 p-8 rounded-xl mb-16 text-center text-white">
            <h2 className="text-xl font-semibold mb-3">Ready to simplify family scheduling?</h2>
            <p className="mb-6 text-white/90 text-sm">Join thousands of families already using KIN.</p>
            <Link 
              href="https://apps.apple.com/app/kin-calendar" 
              className="bg-white text-black inline-flex items-center justify-center px-6 py-3 rounded-full gap-2 font-medium hover:bg-gray-100 transition-colors"
            >
              <Image src="/apple-logo.svg" alt="Apple Logo" width={20} height={20} />
              Download on the App Store
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-gray-100">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/kin-logo.svg" alt="Kin Logo" width={24} height={24} className="mr-2" />
              <span className="font-semibold">KIN</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <Image src="/twitter-icon.svg" alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <Image src="/instagram-icon.svg" alt="Instagram" width={20} height={20} />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center text-xs text-gray-500 mb-4">
            <Link href="/terms" className="hover:text-gray-800 transition-colors px-3 py-1">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gray-800 transition-colors px-3 py-1">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-800 transition-colors px-3 py-1">Contact Us</Link>
            <Link href="#" className="hover:text-gray-800 transition-colors px-3 py-1">Support</Link>
          </div>
          
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} KIN Calendar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
