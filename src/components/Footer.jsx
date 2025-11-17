export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070a0f] py-10 text-center text-sm text-white/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Axle. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a className="hover:text-white/80 transition-colors" href="#">Security</a>
            <a className="hover:text-white/80 transition-colors" href="#">Status</a>
            <a className="hover:text-white/80 transition-colors" href="#">Docs</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
