import { Suspense } from "react";

import { ServerTime } from "@/components/server-time";
import { TimeDisplay, TimeDisplaySkeleton } from "@/components/time-display";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-16 py-32 sm:items-start">
        <h1 className="text-3xl font-bold">Hello, Cloudflare!</h1>
        <p className="mt-3 text-2xl">
          This is a Next.js app running on Cloudflare Workers using{" "}
          <a
            href="https://opennext.js.org/cloudflare"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-foreground hover:underline"
          >
            OpenNext
          </a>
          .
        </p>
        <Card className="mx-auto mt-3 w-full max-w-md">
          <CardHeader>
            <CardTitle>Streaming a client component</CardTitle>
            <CardDescription>
              The times below are rendered in the client and server respectively.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TimeDisplay label={"Local time"} /> {/* CSR */}
            <Suspense fallback={<TimeDisplaySkeleton />}>
              <ServerTime /> {/* SSR */}
            </Suspense>
          </CardContent>
          <CardFooter>
            <p>
              Local time is rendered in the client, while server time is instantiated in the server
              at request time.
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
