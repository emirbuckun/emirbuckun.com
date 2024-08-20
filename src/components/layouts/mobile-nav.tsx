"use client";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { NavItem } from "@/types";
import { useState } from "react";

interface MobileNavProps {
  items?: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <DoubleArrowRightIcon className="size-4" />
          <span className="sr-only">Toggle Menu</span>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="mx-4">
            <SheetTitle className="text-left mb-2">
              <Link
                href="/"
                className="font-bold"
                onClick={() => setOpen(false)}
              >
                {siteConfig.name}
                <span className="sr-only">Home</span>
              </Link>
            </SheetTitle>
            <div className="flex flex-col space-y-4 text-left">
              {items?.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 px-2"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
