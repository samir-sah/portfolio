import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Projects", href: "#" },
  { name: "Skills", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      
      <nav className="flex items-center justify-between p-6 lg:px-8">
        
        <div className="flex-1">
          <h1 className="text-white font-bold text-lg">Samir</h1>
        </div>

        <div className="hidden lg:flex flex-1 justify-center gap-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <button 
            className="lg:hidden" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="size-6 text-white" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-black p-6">
          
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="size-6 text-white" />
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white text-lg"
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