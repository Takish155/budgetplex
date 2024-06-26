"use client";

import AuthenticatedMenu from "@/app/[locale]/(authenticated)/AuthenticatedMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useSessionMenu from "@/states/sessionMenuState";
import { Menu } from "lucide-react";
import React from "react";
import RenderMobileMemberLinks from "./RenderMobileMemberLinks";
import MobileSelectLanguage from "../../MobileSelectLanguage";
import MobileSelectTheme from "../../MobileSelectTheme";

const MobileMemberNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu size={30} className="ml-2" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <RenderMobileMemberLinks />
        <MobileSelectLanguage />
        <MobileSelectTheme />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMemberNav;
