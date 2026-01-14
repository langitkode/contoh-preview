"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building,
  Check,
  Instagram,
  MapPin,
  Maximize,
  Phone,
  Search,
  Menu,
  X,
} from "lucide-react";
import { UMKMConfig } from "@/types/config";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { getInstagramImageUrl } from "@/utils/instagram";

export default function Template8({ config }: { config: UMKMConfig }) {
  const [offsetY, setOffsetY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primary = config.theme?.primaryColor || "#0f172a"; // Slate-900
  const accent = config.theme?.secondaryColor || "#d97706"; // Amber-600

  return (
    <div
      className="min-h-screen font-sans text-slate-800 bg-white"
      style={
        {
          "--primary": primary,
          "--accent": accent,
        } as React.CSSProperties
      }
    >
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full z-[999] bg-white border-b border-slate-100 transition-all py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight uppercase flex items-center gap-2 text-[color:var(--primary)]">
            <Building className="text-[color:var(--accent)]" />{" "}
            {config.businessName}
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#listings" className="hover:text-[color:var(--primary)]">
              Properties
            </a>
            <a href="#about" className="hover:text-[color:var(--primary)]">
              About
            </a>
            <a href="#contact" className="hover:text-[color:var(--primary)]">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href={
                config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
              }
              className="px-6 py-2 bg-[color:var(--primary)] text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              {config.cta?.text || "Inquire Now"}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[color:var(--primary)] relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden flex flex-col p-8 pt-24 gap-6 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a
            href="#listings"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-[color:var(--primary)]"
          >
            Properties
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-[color:var(--primary)]"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-[color:var(--primary)]"
          >
            Contact
          </a>
          <hr className="border-slate-100" />
          <a
            href={
              config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
            }
            onClick={() => setIsMenuOpen(false)}
            className="text-center py-4 bg-[color:var(--primary)] text-white font-bold rounded-lg mt-4"
          >
            {config.cta?.text || "Inquire Now"}
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[80vh] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: `url(${optimizeHeroImage(config.heroImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `scale(${1 + offsetY * 0.0005})`, // Subtle zoom on scroll
            transition: "transform 0.1s linear",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="bg-white/95 backdrop-blur p-8 md:p-12 max-w-xl shadow-2xl border-l-4 border-[color:var(--accent)] transform translate-y-8 animate-fade-in-up">
            <span className="text-[color:var(--accent)] font-bold uppercase tracking-widest text-xs mb-2 block">
              Premium Spaces
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--primary)] mb-6 leading-tight">
              {config.tagline}
            </h1>
            <p className="text-slate-600 mb-8 border-l border-slate-300 pl-4 py-1">
              {config.description}
            </p>
            <div className="flex gap-4">
              <a
                href="#listings"
                className="flex-1 text-center py-3 bg-[color:var(--accent)] text-white font-bold hover:bg-amber-700 transition-colors"
              >
                View Listings
              </a>
              <a
                href={config.cta?.link}
                className="flex-1 text-center py-3 border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-[color:var(--primary)] transition-colors"
              >
                Contact Agent
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH BAR (Visual Only) - To simulate real estate feel */}
      <div className="bg-[color:var(--primary)] py-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-white/80 text-sm">
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-[color:var(--accent)] font-bold uppercase text-xs">
                  Location
                </span>
                <span className="text-white font-medium">
                  {config.contact.address.split(",")[0] || "Jakarta"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[color:var(--accent)] font-bold uppercase text-xs">
                  Type
                </span>
                <span className="text-white font-medium">
                  Commercial / Office
                </span>
              </div>
            </div>
            <div className="hidden md:block text-xs uppercase tracking-widest opacity-50">
              Premium Real Estate Solutions
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED LISTINGS */}
      <section id="listings" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[color:var(--primary)] mb-3">
                Featured Properties
              </h2>
              <div className="h-1 w-20 bg-[color:var(--accent)]" />
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-[color:var(--primary)] hover:text-[color:var(--accent)] transition-colors"
            >
              View All Properties <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(config.products || []).slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="bg-white group cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-out border border-slate-100"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={optimizeProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[color:var(--primary)] shadow-sm">
                    {product.category}
                  </div>
                  <div className="absolute bottom-0 left-0 bg-[color:var(--primary)] text-white px-4 py-2 font-medium">
                    Rp {product.price.toLocaleString("id-ID")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[color:var(--primary)] mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2 h-10">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Maximize size={14} /> Available Now
                    </span>
                    <a
                      href={product.link}
                      className="text-[color:var(--accent)] hover:underline"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Mobile */}
          <div className="mt-8 text-center md:hidden">
            <a
              href="#"
              className="inline-block py-3 px-8 border border-[color:var(--primary)] text-[color:var(--primary)] font-bold text-sm uppercase"
            >
              See All
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION w/ Parallax */}
      <section
        id="about"
        className="py-24 relative overflow-hidden bg-[color:var(--primary)] text-white"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose {config.businessName}?
            </h2>
            <div className="space-y-4">
              {[
                "Premium Locations & High Visibility",
                "Modern Architecture & Design",
                "Best-in-class Facilities",
                "Professional Management Team",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="bg-[color:var(--accent)] p-1 rounded-full">
                    <Check size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {(config.testimonials || []).length > 0 && (
            <div className="bg-white text-[color:var(--primary)] p-10 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 bg-[color:var(--accent)] text-white p-4">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/quote-left.png"
                  className="w-6 h-6"
                  alt="quote"
                />
              </div>
              <p className="text-lg italic text-slate-600 mb-6 relative z-10">
                "{config.testimonials[0].comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-[color:var(--primary)]">
                  {config.testimonials[0].customerName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    {config.testimonials[0].customerName}
                  </h4>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    Verified Tenant
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* GALLERY STRIP */}
      {(config.instagramImages || []).length > 0 && (
        <section className="bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {(config.instagramImages || []).slice(0, 6).map((img, i) => (
              <a
                href={img}
                key={i}
                target="_blank"
                className="group relative aspect-square overflow-hidden block"
              >
                <div className="absolute inset-0 group-hover:bg-[color:var(--primary)]/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <Instagram />
                </div>
                <img
                  src={getInstagramImageUrl(img)}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Ig"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-sm"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white text-xl font-bold uppercase mb-6 flex items-center gap-2">
              <Building size={20} className="text-[color:var(--accent)]" />{" "}
              {config.businessName}
            </div>
            <p className="max-w-xs mb-6">{config.description}</p>
            <div className="flex gap-4">
              {config.contact.instagram && (
                <Instagram
                  className="hover:text-white transition-colors cursor-pointer"
                  size={20}
                />
              )}
              <Phone
                className="hover:text-white transition-colors cursor-pointer"
                size={20}
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Contact
            </h4>
            <p className="mb-2">
              <MapPin size={14} className="inline mr-2" />{" "}
              {config.contact.address}
            </p>
            <p className="mb-2">
              <Phone size={14} className="inline mr-2" />{" "}
              {config.contact.whatsapp}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[color:var(--accent)]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[color:var(--accent)]">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[color:var(--accent)]">
                  Contact Agent
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs uppercase tracking-widest opacity-50">
          {config.footer?.copyrightText}
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          className="flex items-center gap-3 bg-[color:var(--accent)] text-white px-6 py-4 shadow-2xl hover:bg-amber-700 transition-colors"
        >
          <Phone size={20} />
          <span className="font-bold uppercase text-sm tracking-wider hidden md:inline">
            {config.cta?.text || "Contact Agent"}
          </span>
        </a>
      </div>
    </div>
  );
}
