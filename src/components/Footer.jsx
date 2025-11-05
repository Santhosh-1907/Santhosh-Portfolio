import React from "react";

export default function Footer() {
  return (
    <footer className="pt-10 pb-14">
      <div className="container-grid flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Santhosh. All rights reserved.</p>
        <p className="text-sm text-white/60">Made with Santhosh</p>
      </div>
    </footer>
  );
}
