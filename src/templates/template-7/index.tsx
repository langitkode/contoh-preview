"use client";
import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Instagram,
  MapPin,
  Phone,
  Play,
  ShoppingBag,
  Trophy,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { UMKMConfig } from "@/types/config";
import { optimizeHeroImage, optimizeProductImage } from "@/utils/cloudinary";
import { getInstagramImageUrl } from "@/utils/instagram";

export default function Template7({ config }: { config: UMKMConfig }) {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primary = config.theme?.primaryColor || "#ef4444"; // Red default
  const secondary = config.theme?.secondaryColor || "#111827"; // Dark default

  return (
    <div
      className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-red-500 selection:text-white relative w-full overflow-x-hidden"
      style={
        {
          "--primary": primary,
          "--secondary": secondary,
        } as React.CSSProperties
      }
    >
      <style jsx global>{`
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        .clip-path-slant-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        @media (max-width: 768px) {
          .clip-path-slant {
            clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
          }
        }
      `}</style>

      {/* NAVBAR REBUILT */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-neutral-900/90 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
        <div className="container mx-auto px-6 w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase flex items-center gap-2 z-[110]">
            <Zap
              className="text-[color:var(--primary)] w-8 h-8"
              fill="currentColor"
            />
            <span className="whitespace-nowrap">{config.businessName}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="font-bold uppercase tracking-wider hover:text-[color:var(--primary)] transition-colors text-sm"
            >
              Gear
            </a>
            <a
              href="#testimonials"
              className="font-bold uppercase tracking-wider hover:text-[color:var(--primary)] transition-colors text-sm"
            >
              Athletes
            </a>
            <a
              href="#contact"
              className="font-bold uppercase tracking-wider hover:text-[color:var(--primary)] transition-colors text-sm"
            >
              Contact
            </a>

            <a
              href={
                config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
              }
              className="flex items-center gap-2 px-6 py-2 bg-white text-black font-black uppercase text-sm -skew-x-12 hover:bg-[color:var(--primary)] hover:text-white transition-all transform hover:-translate-y-1"
            >
              <span className="skew-x-12">
                {config.cta?.text || "Join Now"}
              </span>
              <ArrowRight size={16} className="skew-x-12" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-[110] p-2 text-white hover:text-[color:var(--primary)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 w-full h-screen bg-neutral-950 z-[105] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out px-6 text-center ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <a
            href="#products"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black italic uppercase hover:text-[color:var(--primary)] transition-colors tracking-tighter"
          >
            Gear
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black italic uppercase hover:text-[color:var(--primary)] transition-colors tracking-tighter"
          >
            Athletes
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black italic uppercase hover:text-[color:var(--primary)] transition-colors tracking-tighter"
          >
            Contact
          </a>
          <a
            href={
              config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
            }
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[color:var(--primary)] text-white font-black uppercase text-lg -skew-x-12"
          >
            <span className="block skew-x-12">Join Now</span>
          </a>
        </div>
      </nav>

      {/* PARALLAX HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden clip-path-slant bg-neutral-800 pb-32 md:pb-48 pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${optimizeHeroImage(config.heroImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-neutral-900/70 z-10 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent" />

        <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-10 md:pt-20">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-[color:var(--primary)] text-[color:var(--primary)] font-bold uppercase tracking-wider text-[10px] md:text-xs rounded-full">
              <Activity size={14} /> Power & Performance
            </div>
            <h1 className="text-4xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                {config.tagline.split(" ")[0]}
              </span>
              <br />
              <span className="text-[color:var(--primary)]">
                {config.tagline.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-lg border-l-4 border-[color:var(--primary)] pl-6">
              {config.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="px-8 py-4 bg-[color:var(--primary)] text-white font-black uppercase tracking-wider -skew-x-12 hover:scale-105 transition-transform text-center"
              >
                <div className="skew-x-12">Start Now</div>
              </a>
              <a
                href={
                  config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
                }
                className="px-8 py-4 border border-white text-white font-black uppercase tracking-wider -skew-x-12 hover:bg-white hover:text-black transition-colors text-center"
              >
                <div className="skew-x-12 flex items-center justify-center gap-2">
                  <Play size={16} fill="currentColor" /> Watch Video
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[color:var(--primary)]/10 -skew-x-12 z-10 translate-x-20" />
      </section>

      {/* PRODUCTS / SERVICES GRID */}
      <section id="products" className="py-24 bg-neutral-900 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                Our <span className="text-[color:var(--primary)]">Gear</span>
              </h2>
              <div className="h-2 w-32 bg-[color:var(--primary)] mt-4 skew-x-12" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(config.products || []).slice(0, 3).map((product, idx) => (
              <div
                key={product.id}
                className="group relative bg-neutral-800 border-2 border-transparent hover:border-[color:var(--primary)] transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[color:var(--primary)]/0 group-hover:bg-[color:var(--primary)]/20 z-10 transition-colors" />
                  <img
                    src={optimizeProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black text-white text-xs font-bold px-3 py-1 uppercase -skew-x-12">
                    <span className="skew-x-12">{product.category}</span>
                  </div>
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-6 bg-[color:var(--primary)] text-white font-black text-xl p-4 -skew-x-12 shadow-lg">
                    <div className="skew-x-12">
                      Rp {product.price.toLocaleString("id-ID")}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black uppercase italic mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <a
                    href={product.link || config.cta?.link}
                    className="inline-block w-full py-3 text-center border border-white/20 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                  >
                    Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {config.products.length > 3 && (
            <div className="text-center mt-12">
              <a
                href={
                  config.cta?.link || `https://wa.me/${config.contact.whatsapp}`
                }
                className="inline-block border-b-2 border-[color:var(--primary)] text-[color:var(--primary)] font-black uppercase tracking-widest hover:text-white transition-colors pb-1"
              >
                View All Products
              </a>
            </div>
          )}
        </div>
      </section>

      {/* STATS / TESTIMONIALS */}
      {(config.testimonials || []).length > 0 && (
        <section
          id="testimonials"
          className="py-24 bg-[color:var(--primary)] text-white clip-path-slant-reverse relative overflow-hidden"
        >
          {/* Simple pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)",
            }}
          ></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <Trophy size={48} className="mx-auto mb-4" />
              <h2 className="text-4xl font-black uppercase italic">
                Champions Trust Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {config.testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-black/20 backdrop-blur p-8 border border-white/10 relative"
                >
                  <p className="text-xl font-bold italic mb-6">"{t.comment}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-black">
                      {t.customerName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-black uppercase">{t.customerName}</h4>
                      <div className="flex gap-1 text-yellow-400 text-xs">
                        {[...Array(t.rating)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INSTAGRAM GRID */}
      {(config.instagramImages || []).length > 0 && (
        <section className="py-24 bg-neutral-900">
          <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
            <h2 className="text-4xl font-black uppercase italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--primary)] to-white">
                #FollowTheAction
              </span>
            </h2>
            <a
              href={`https://instagram.com/${config.contact.instagram}`}
              className="flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors"
            >
              <Instagram size={20} /> @{config.contact.instagram || "sport"}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {(config.instagramImages || []).map((img, i) => (
              <a
                href={img}
                target="_blank"
                rel="noreferrer"
                key={i}
                className="aspect-square relative overflow-hidden group"
              >
                <img
                  src={getInstagramImageUrl(img)}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  alt={`Instagram ${i}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Instagram className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-black py-16 text-center border-t border-white/10"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black uppercase italic mb-8 flex items-center justify-center gap-2">
            <Zap className="text-[color:var(--primary)]" fill="currentColor" />
            {config.businessName}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-gray-400 font-bold uppercase text-sm tracking-widest">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} /> {config.contact.address}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} /> {config.contact.whatsapp}
            </div>
          </div>

          <div className="bg-[color:var(--primary)] w-full h-1 max-w-xs mx-auto mb-8" />

          <p className="text-gray-600 text-xs uppercase">
            {config.footer?.copyrightText}
          </p>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={config.cta?.link || `https://wa.me/${config.contact.whatsapp}`}
          className="flex items-center justify-center w-16 h-16 bg-[color:var(--primary)] text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:scale-110 transition-transform -skew-x-12 animate-pulse"
        >
          <Phone className="skew-x-12" size={28} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
