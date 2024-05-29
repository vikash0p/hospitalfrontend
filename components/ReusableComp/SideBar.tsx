import { Button } from "@/components/ui/button";
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
import { Settings } from "lucide-react";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="size-10 rounded-full bg-primary flex flex-col justify-center items-center text-white dark:text-black"
          aria-label="Open settings"
        >
          <Settings aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        role="dialog"
        aria-labelledby="sheet-title"
        aria-describedby="sheet-description"
      >
        <SheetHeader>
          <SheetTitle id="sheet-title">Edit profile</SheetTitle>
          <SheetDescription id="sheet-description">
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* Content for editing profile goes here */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" aria-label="Save changes">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
