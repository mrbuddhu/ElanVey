import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-8xl font-bold gradient-text md:text-9xl">
        404
      </p>
      <h1 className="heading-display mt-6 text-3xl text-ev-white md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ev-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10">
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </div>
      <Link
        href="/contact"
        className="mt-6 text-sm text-ev-muted transition-colors hover:text-ev-white"
      >
        Or contact us →
      </Link>
    </div>
  );
}
