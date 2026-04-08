import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Fixed to top, slight translucent blur so background art shows through but keeps text legible */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');
      `}</style>

      <nav className="flex items-center justify-between p-6 lg:px-12 max-w-[1600px] mx-auto">
        
        {/* Left: Brand Name */}
        <div className="flex-1">
          <a href="#" className="inline-block text-gray-900 text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Samir
          </a>
        </div>

        {/* Right: Desktop Navigation */}
        <div className="hidden lg:flex gap-10 justify-end">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] tracking-[0.2em] uppercase text-gray-500 hover:text-gray-900 transition-colors duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex justify-end lg:hidden">
          <button 
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="size-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-white p-6 shadow-2xl transition-transform duration-300">
          
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-gray-900 text-2xl font-black tracking-tighter" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Samir
            </h1>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <XMarkIcon className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col space-y-6 mt-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs tracking-[0.25em] uppercase text-gray-600 hover:text-gray-900 border-b border-gray-100 pb-4 transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

        </DialogPanel>
      </Dialog>
    </header>
  );
}