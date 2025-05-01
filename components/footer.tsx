'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-bold">Green Travel for All</h2>
          <p className="mt-2 text-sm">
            Making sustainable travel accessible to families, seniors, and everyone.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/families">Families</Link></li>
            <li><Link href="/seniors">Seniors</Link></li>
            <li><Link href="/accessible">Accessible</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full px-2 py-1 text-sm mt-2"
            />
            <button type="submit" className="mt-2 bg-emerald-600 text-white px-4 py-1 rounded text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}