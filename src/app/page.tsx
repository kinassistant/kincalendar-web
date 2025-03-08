import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/kin-logo.svg" alt="Kin Logo" width={24} height={24} className="mr-2" />
          <span className="font-semibold">KIN</span>
        </div>
        <Link 
          href="https://apps.apple.com/app/kin-calendar" 
          className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium"
        >
          Get KIN
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">
            The Future of Family Scheduling
          </h1>
          <p className="text-center text-gray-600 mb-6">
            "Finally! A family calendar app that actually helps rather than just creates more stress."
          </p>

          <div className="flex justify-center mb-8">
            <Link 
              href="https://apps.apple.com/app/kin-calendar" 
              className="bg-black text-white flex items-center justify-center px-6 py-3 rounded-full gap-2 font-medium"
            >
              <Image src="/apple-logo.svg" alt="Apple Logo" width={20} height={20} />
              Download on the App Store
            </Link>
          </div>

          <img 
            src="/app-screenshot.png" 
            alt="KIN App Screenshot" 
            className="rounded-xl shadow-lg w-full h-auto"
          />

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">KIN makes family scheduling...</h2>
            
            <div className="grid gap-4">
              <div className="bg-orange-100 p-4 rounded-lg flex items-start">
                <div className="bg-white p-2 rounded-full mr-3">
                  <span className="text-orange-500">🔄</span>
                </div>
                <div>
                  <h3 className="font-medium">Collaborative</h3>
                  <p className="text-sm text-gray-700">Share events with family members in real-time</p>
                </div>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg flex items-start">
                <div className="bg-white p-2 rounded-full mr-3">
                  <span className="text-blue-500">🎯</span>
                </div>
                <div>
                  <h3 className="font-medium">Simple</h3>
                  <p className="text-sm text-gray-700">Create events with just 1 tap</p>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg flex items-start">
                <div className="bg-white p-2 rounded-full mr-3">
                  <span className="text-green-500">✅</span>
                </div>
                <div>
                  <h3 className="font-medium">Designed for modern families</h3>
                  <p className="text-sm text-gray-700">Built to handle complex family schedules</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Latest updates</h2>
              <span className="text-xs text-gray-500">From KIN v1.0</span>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium">Family calendar</h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">New</span>
              </div>
              <p className="text-sm text-gray-700">Share and manage events across your family members</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium">Smart reminders</h3>
                <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">Update</span>
              </div>
              <p className="text-sm text-gray-700">Get timely notifications for upcoming events</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium">Event creation</h3>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Fix</span>
              </div>
              <p className="text-sm text-gray-700">Create events more quickly with improved UI</p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-center">The Story Behind KIN</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                KIN was created by parents who were tired of complex family scheduling apps. We built what we wanted ourselves: a simple, fast way to keep track of everyone's schedules.
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/founder-team.jpg" 
                  alt="KIN Founders" 
                  width={300} 
                  height={200} 
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">How much does KIN cost?</h3>
                <p className="text-sm text-gray-700">KIN is free to download with core features available to all users. Premium features are available via subscription.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">Is my data secure with KIN?</h3>
                <p className="text-sm text-gray-700">Yes! We use industry-standard encryption and never share your personal data with third parties.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">How many family members can I add?</h3>
                <p className="text-sm text-gray-700">You can add up to 8 family members on the free plan, and unlimited on our premium plan.</p>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mb-12 text-center">
            <h2 className="text-xl font-semibold mb-2">Ready to simplify family scheduling?</h2>
            <p className="text-gray-700 mb-4">Join thousands of families already using KIN.</p>
            <Link 
              href="https://apps.apple.com/app/kin-calendar" 
              className="bg-black text-white inline-flex items-center justify-center px-6 py-3 rounded-full gap-2 font-medium"
            >
              <Image src="/apple-logo.svg" alt="Apple Logo" width={20} height={20} />
              Download on the App Store
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Image src="/kin-logo.svg" alt="Kin Logo" width={20} height={20} className="mr-2" />
              <span className="font-semibold text-sm">KIN</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500">
                <Image src="/twitter-icon.svg" alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="#" className="text-gray-500">
                <Image src="/instagram-icon.svg" alt="Instagram" width={20} height={20} />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between text-sm text-gray-500 mb-4">
            <Link href="/terms" className="hover:underline mb-2 mr-4">Terms of Service</Link>
            <Link href="/privacy" className="hover:underline mb-2 mr-4">Privacy Policy</Link>
            <Link href="#" className="hover:underline mb-2 mr-4">Contact Us</Link>
            <Link href="#" className="hover:underline mb-2">Support</Link>
          </div>
          
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} KIN Calendar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
