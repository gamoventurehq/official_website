import Image from "next/image";
import Link from "next/link";
import { contact } from "./siteContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-primary">
        <div>
          <Link className="wordmark footer-wordmark" href="/" aria-label="Gamoventure home">
            <Image src="/logos/symbol.png" alt="" width={38} height={38} />
            <span className="brand-wordmark">Gamoventure</span>
          </Link>
          <p>Purpose-built technology for ambitious businesses.</p>
        </div>
        <div className="footer-nav"><span>Explore</span><Link href="/capabilities">Capabilities</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-nav"><span>Start a conversation</span><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a><a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a></div>
      </div>
      <div className="page-shell footer-legal">
        <p>© {new Date().getFullYear()} Gamoventure. Independent digital product and solutions studio.</p>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
