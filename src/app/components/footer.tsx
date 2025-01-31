"use client";
import Link from "next/link";
import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <div id="section_footer">
      <div className="text-center py-10 ">
        <Link href="" target="_blank" className="btn btn-link py-2">
          Privacy
        </Link>
        <span>|</span>
        <Link href="" target="_blank" className="btn btn-link">
          Terms
        </Link>
        <span>|</span>
        <Link href="" className="btn btn-link">
          Contact
        </Link>

        <div className="mt-2 mb-3 flex justify-center p-2">
          <Link href="" target="_blank" className="social-icon mx-1">
            <IoLogoFacebook size={25} />
          </Link>

          <Link href="" target="_blank" className="social-icon mx-1">
            <IoLogoInstagram size={25} />
          </Link>

          <Link href="" target="_blank" className="social-icon mx-1">
            <IoLogoLinkedin size={25} />
          </Link>

          <Link href="" target="_blank" className="social-icon mx-1">
            <IoLogoYoutube size={25} />
          </Link>
        </div>

        <p>Copyright © {current_year}, Loom. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
