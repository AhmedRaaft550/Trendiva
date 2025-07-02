"use client";

import { useState } from "react";
import FooterSchema from "./FooterSchema";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/yourpage",
  },
  {
    Icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/yourprofile",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/yourprofile",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <FooterSchema
      socialLinks={socialLinks}
      email={email}
      setEmail={setEmail}
      submitted={submitted}
      handleSubmit={handleSubmit}
    />
  );
};

export default Footer;
