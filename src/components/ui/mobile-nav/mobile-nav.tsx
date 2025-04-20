"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import Link from "next/link";

export function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          className="p-2"
          onClick={(e) => {
            (e.currentTarget as HTMLButtonElement).blur();
          }}
        >
          <Menu />
        </button>
      </DrawerTrigger>
      <DrawerContent className="flex items-center">
        <DrawerHeader className="flex items-center">
          <DrawerTitle tabIndex={-1} autoFocus>
            Меню
          </DrawerTitle>
          <DrawerDescription>
            Обери пункт меню зі списку нижче
          </DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-col space-y-2 p-4 text-center">
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
