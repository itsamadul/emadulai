// Header.jsx
import Link from 'next/link';
import { LogIn, Search, Settings } from 'lucide-react'; // আইকনের জন্য

export default function Header() {
  // লগইন স্টেট ডায়নামিকালি ম্যানেজ হবে (নিচে দেখানো হয়েছে)
  const isAuthenticated = false; // আপাতত false ধরে নেওয়া হলো

  return (
    <header className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-white sticky top-0 z-10">
      
      {/* লোগো */}
      <Link href="/" className="text-2xl font-extrabold text-indigo-600">
        toolsax
      </Link>

      {/* নেভিগেশন আইকন এবং বাটন */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search size={20} className="text-gray-600" />
        </button>
        
        {isAuthenticated ? (
          // ইউজার লগইন করা থাকলে ড্যাশবোর্ড/প্রোফাইল
          <Link href="/dashboard" className="text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            ড্যাশবোর্ড
          </Link>
        ) : (
          // লগইন/সাইনআপ বাটন
          <Link href="/login" className="flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            <LogIn size={16} />
            <span>লগইন / সাইনআপ</span>
          </Link>
        )}
        
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings size={20} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
}
