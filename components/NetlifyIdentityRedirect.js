"use client";

import { useEffect } from "react";

const AUTH_HASH_PATTERN = /recovery_token|invite_token|confirmation_token/;

function redirectAuthHashToAdmin() {
  if (typeof window === "undefined") return;

  const { pathname, hash } = window.location;

  if (pathname.startsWith("/admin")) return;
  if (!hash || !AUTH_HASH_PATTERN.test(hash)) return;

  window.location.replace(`/admin/${hash}`);
}

export default function NetlifyIdentityRedirect() {
  useEffect(() => {
    redirectAuthHashToAdmin();
  }, []);

  return null;
}
