"use client";
import React, { useState, Fragment, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const navLinksBeforeTeam = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

const navLinksAfterTeam = [
  { href: "/education", label: "Education" },
  { href: "/student-branches", label: "Student Branch Chapters" },
  { href: "/events", label: "Events" },
  { href: "https://ieeemapcon.org/", label: "IEEE Mapcon" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-sm">
      <div className="flex items-center justify-between px-1 py-2 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-[16px]">
          <div className="relative w-[150px] h-17">
            <Image
              src="/logo.png"
              alt="IEEE Logo"
              fill
              style={{ objectFit: "fill" }}
              className=""
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 text-base font-medium ml-auto">
          {navLinksBeforeTeam.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <TeamDropdown />
          {navLinksAfterTeam.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              extraClass={link.href === "/contact" ? "mr-4" : ""}
            />
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden pr-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border border-gray-600 rounded-md transition-all duration-200 text-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-gray-800 px-4 py-2 space-y-1 text-base font-medium text-gray-100 shadow-sm"
        >
          {/* Show links before Team */}
          {navLinksBeforeTeam.map((link) => (
            <MobileNavItem
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setMobileOpen(false)}
            />
          ))}

          {/* Team Disclosure placed right after About Us */}
          <Disclosure>
            {({ open }) => (
              <div>
                <Disclosure.Button className="flex justify-between w-full py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <span>Team</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pl-4 space-y-1">
                  <MobileNavItem
                    href="/team/2024"
                    label="Team 2024"
                    onClick={() => setMobileOpen(false)}
                  />
                  <MobileNavItem
                    href="/team/2025"
                    label="Team 2025"
                    onClick={() => setMobileOpen(false)}
                  />
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          {/* Remaining links */}
          {navLinksAfterTeam.map((link) => (
            <MobileNavItem
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
}

// Desktop NavLink Component
function NavLink({ href, label, extraClass = "" }) {
  return (
    <Link
      href={href}
      className={`py-2 hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition-colors ${extraClass}`}
    >
      {label}
    </Link>
  );
}

// Mobile NavLink Component
function MobileNavItem({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
    >
      {label}
    </Link>
  );
}

// Team Dropdown for Desktop
function TeamDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex items-center py-2 border-b-2 border-transparent hover:border-gray-300 transition-colors focus:outline-none">
        Team
        <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/team/2024"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-700 text-white" : "text-gray-200"
                  }`}
                >
                  Team 2024
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/team/2025"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-700 text-white" : "text-gray-200"
                  }`}
                >
                  Team 2025
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
