import Link from "next/link";
import { photos } from "./data";
import IdentifiedReport from "@/components/IdentifiedReport";

export const metadata = {
  title: "Identified Cards · CertStudy",
  description:
    "Pokémon cards identified via OCR from collection photos, matched against the Collectr export and priced live from PriceCharting.",
};

export default function IdentifiedCardsPage() {
  const cardCount = photos.reduce((s, p) => s + p.cards.length, 0);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <header className="mb-6">
        <p className="text-sm font-medium text-primary">
          <Link href="/cards" className="hover:underline">
            Cards
          </Link>{" "}
          / Identified
        </p>
        <h1 className="mt-1 text-3xl font-semibold">
          Pokémon Card Identification Report
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {cardCount} cards identified across {photos.length} collection photos.
          Each row shows the Collectr export price next to a live PriceCharting
          ungraded price (loads in the background).
        </p>
      </header>

      <IdentifiedReport photos={photos} />

      <footer className="mt-10 rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
        <p>
          Card identification was performed by reading set codes and card
          numbers from each crop and cross-referencing against the Collectr
          export. Collectr prices reflect the &quot;Market Price&quot; column at
          the time of identification. PriceCharting ungraded prices stream in
          live after the page loads.
        </p>
      </footer>
    </main>
  );
}
