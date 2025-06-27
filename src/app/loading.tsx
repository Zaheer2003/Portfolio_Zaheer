"use client"

import IronmanHeartSpinner from "@/components/IronSpinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#01003D] bg-opacity-90 z-50">
      <IronmanHeartSpinner />
    </div>
  );
}
