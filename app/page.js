import Header from '@/components/Header';
import Footer from '@/components/Footer'; // ধরে নেওয়া হলো Footer কম্পোনেন্টও তৈরি করেছেন

const toolsList = [
  { name: "Advance Telegram Post Maker", desc: "Create and send stylish Telegram posts...", views: 91, icon: "telegram" },
  { name: "Age Calculator", desc: "Calculate age from date of birth.", views: 23, icon: "calendar" },
  { name: "Word Counter", desc: "Count words, characters, and sentences.", views: 0, icon: "text" },
  // এখানে আরও টুলস যোগ করুন...
];

function ToolCard({ tool }) {
  // টুল কার্ড ডিজাইন, আপনার স্ক্রিনশটের মতো
  return (
    <Link href={`/${tool.name.toLowerCase().replace(/\s/g, '-')}`} className="block p-4 mb-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-center">
        {/* আইকন প্লেসহোল্ডার */}
        <div className="p-3 mr-4 rounded-xl bg-indigo-50 text-indigo-600">
            <span className="font-bold">{tool.icon.slice(0, 1).toUpperCase()}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{tool.name}</h3>
          <p className="text-sm text-gray-500">{tool.desc}</p>
        </div>
        <span className="ml-auto text-sm text-gray-400">{tool.views}</span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* প্রধান শিরোনাম সেকশন */}
        <div className="text-center py-12">
            <p className="text-indigo-600 font-medium mb-2">An expanding collection of free online tools</p>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Free Online Tools for <span className="text-purple-600">Developers & Designers</span></h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                An expanding collection of free online tools including case converters, password generators, QR code creators, and more. Fast, secure, and easy to use.
            </p>
        </div>

        {/* টুলস তালিকা */}
        <div className="mt-10 grid gap-4">
          {toolsList.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </main>
      <Footer /> 
    </>
  );
}
