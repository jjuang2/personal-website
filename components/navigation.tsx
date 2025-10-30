"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { X, Menu } from "lucide-react"

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "about", href: "/about", svg: "/nav/about.svg" },
    { name: "projects", href: "/projects", svg: "/nav/projects.svg" },
    { name: "blog", href: "/blog", svg: "/nav/blog.svg" },
  ]

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking on a link
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="w-full bg-warm-oat relative z-50">
        <nav className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 group"
            onMouseEnter={() => setHoveredItem("home")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <Image
                src="/trace.svg"
                alt="Jason Juang"
                width={150}
                height={60}
                className="h-auto max-w-[150px] md:max-w-[150px] w-auto transition-all duration-300 ease-in-out"
                priority
                style={{
                  filter:
                    hoveredItem === "home"
                      ? "brightness(0) saturate(100%) invert(45%) sepia(25%) saturate(1000%) hue-rotate(75deg) brightness(95%) contrast(85%)"
                      : "none",
                  mixBlendMode: "multiply", // This helps remove white backgrounds
                }}
              />
              {/* Fallback for white background removal */}
              <style jsx>{`
                .home-logo svg {
                  background: transparent !important;
                }
                .home-logo path[fill="white"],
                .home-logo path[fill="#ffffff"],
                .home-logo path[fill="#FFFFFF"] {
                  fill: transparent !important;
                }
                .home-logo rect[fill="white"],
                .home-logo rect[fill="#ffffff"],
                .home-logo rect[fill="#FFFFFF"] {
                  fill: transparent !important;
                }
              `}</style>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative">
                  <Image
                    src={item.svg || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={30}
                    className={`h-auto transition-all duration-300 ${
                      hoveredItem === item.name ? "brightness-0 saturate-100" : ""
                    }`}
                    style={{
                      filter:
                        hoveredItem === item.name
                          ? "brightness(0) saturate(100%) invert(45%) sepia(25%) saturate(1000%) hue-rotate(75deg) brightness(95%) contrast(85%)"
                          : "brightness(0) saturate(100%) invert(20%) sepia(8%) saturate(1000%) hue-rotate(0deg) brightness(95%) contrast(85%)",
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-charcoal" />
            ) : (
              <Menu size={24} className="text-charcoal" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-warm-oat z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-all duration-300 hover:scale-105"
                onClick={handleMobileNavClick}
                onTouchStart={() => setHoveredItem(item.name)}
                onTouchEnd={() => setHoveredItem(null)}
              >
                <div className="relative flex justify-center">
                  <Image
                    src={item.svg || "/placeholder.svg"}
                    alt={item.name}
                    width={120}
                    height={45}
                    className={`h-auto transition-all duration-300 ${
                      hoveredItem === item.name ? "brightness-0 saturate-100" : ""
                    }`}
                    style={{
                      filter:
                        hoveredItem === item.name
                          ? "brightness(0) saturate(100%) invert(45%) sepia(25%) saturate(1000%) hue-rotate(75deg) brightness(95%) contrast(85%)"
                          : "brightness(0) saturate(100%) invert(20%) sepia(8%) saturate(1000%) hue-rotate(0deg) brightness(95%) contrast(85%)",
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
