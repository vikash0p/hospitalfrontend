'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HomeAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does it work ?</AccordionTrigger>
        <AccordionContent>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Do I need a designer to use Doctris ?
        </AccordionTrigger>
        <AccordionContent>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What do I need to do to start selling ?
        </AccordionTrigger>
        <AccordionContent>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          What do I need to do to start selling ?
        </AccordionTrigger>
        <AccordionContent>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
