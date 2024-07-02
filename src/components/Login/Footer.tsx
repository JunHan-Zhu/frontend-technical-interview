import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer className="py-3 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <FooterLink>Contact</FooterLink>
          <FooterLink>Privacy policy</FooterLink>
          <FooterLink>Terms and Conditions</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
    >
      {children}
    </a>
  );
}

export default Footer;
