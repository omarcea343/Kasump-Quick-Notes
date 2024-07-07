"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader, Loader2, Trash } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader className="mr-2 w-4 h-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" className="w-fit">
          Save Now
        </Button>
      )}
    </>
  );
}

export function StripeSubscriptionCreationButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full">
          <Loader className="mr-2 w-4 h-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          Get Now
        </Button>
      )}
    </>
  );
}

export function StripePortal() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader className="mr-2 w-4 h-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button className="w-fit" type="submit">
          View payment details
        </Button>
      )}
    </>
  );
}

export function TrashDelete() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant={"destructive"} size={"icon"} disabled>
          <Loader2 className="w-4 h-4 animate-spin" />
        </Button>
      ) : (
        <Button variant={"destructive"} size={"icon"} type="submit">
          <Trash className="w-4 h-4" />
        </Button>
      )}
    </>
  );
}
