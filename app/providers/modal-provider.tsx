"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const DynamicMinMenuModal = dynamic(
    () =>
      import("@/app/components/modals/min-menu-modal").then(
        (mod) => mod.default
      ),
    {
      ssr: false,
    }
  );

  return (
    <>
      <DynamicMinMenuModal />
    </>
  );
}
export default ModalProvider;
