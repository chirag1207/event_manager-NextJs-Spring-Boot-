// components/BootstrapClient.tsx
"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap.bundle.min.js on the client
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // this component does not render anything
}
