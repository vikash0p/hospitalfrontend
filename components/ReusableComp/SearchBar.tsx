"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";

const SHEET_SIDES = ["top"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SearchBar() {
  return (
    <div className="grid">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button
              className="size-10 rounded-full bg-primary flex flex-col justify-center items-center text-white dark:text-black"
              aria-label="Open search bar"
            >
              <Search aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="py-10"
            role="dialog"
            aria-labelledby="search-sheet-title"
          >
            <SheetHeader>
              <SheetTitle
                id="search-sheet-title"
                className="text-3xl text-center"
              >
                Search
              </SheetTitle>
            </SheetHeader>
            <form
              className="w-full m-auto h-16 flex flex-row gap-12 items-center justify-center"
              aria-labelledby="search-form-title"
            >
              <Label htmlFor="search-input" className="sr-only">
                Search
              </Label>
              <Input
                type="text"
                id="search-input"
                className="ps-5 w-[500px] h-10"
                placeholder="Search"
                aria-label="Search"
              />
              <Button
                type="submit"
                variant="default"
                aria-label="Submit search"
              >
                Search
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
