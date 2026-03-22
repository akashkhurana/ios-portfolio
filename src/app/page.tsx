"use client";

import LockScreen from "@/components/LockScreen";
import HomeScreen from "@/components/HomeScreen";
import AppOverlay from "@/components/AppOverlay";
import AppSwitcher from "@/components/AppSwitcher";

export default function Page() {
  return (
    <>
      <LockScreen />
      <HomeScreen />
      <AppSwitcher />
      <AppOverlay />
    </>
  );
}
