import Image from "next/image";
import Link from "next/link";
import { Camera, ImageIcon } from "lucide-react";
import { photos, totalValue } from "./data";

export const metadata = {
  title: "Identified Cards · CertStudy",
  description:
    "Pokémon cards identified via OCR from collection photos, matched against the Collectr export.",
};

function formatUsd(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

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
          {cardCount} cards identified across {photos.length} collection photos,
          cross-referenced against the Collectr export. Each thumbnail is a crop
          from the original photo — click any image to view it full-size.
        </p>
      </header>

      <section className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            Cards identified
          </p>
          <p className="mt-2 text-2xl font-semibold">{cardCount}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            Source photos
          </p>
          <p className="mt-2 text-2xl font-semibold">{photos.length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            Total market value
          </p>
          <p className="mt-2 text-2xl font-semibold text-emerald-600">
            {formatUsd(totalValue)}
          </p>
        </div>
      </section>

      <div className="space-y-10">
        {photos.map((photo) => {
          const photoTotal = photo.cards.reduce((s, c) => s + c.price, 0);
          return (
            <section key={photo.image}>
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <Camera className="h-5 w-5 text-primary" />
                  {photo.image}
                  <span className="text-sm font-normal text-muted-foreground">
                    · {photo.cards.length} cards
                  </span>
                </h2>
                <div className="flex items-center gap-3 text-sm">
                  <a
                    href={`/cards/identified/originals/${photo.image}.jpeg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <ImageIcon className="h-4 w-4" />
                    View original photo
                  </a>
                  <span className="font-semibold text-emerald-600">
                    {formatUsd(photoTotal)}
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60 text-left text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-3 py-2 font-medium">Pos</th>
                      <th className="px-3 py-2 font-medium">Thumbnail</th>
                      <th className="px-3 py-2 font-medium">Card</th>
                      <th className="px-3 py-2 font-medium">Set / Number</th>
                      <th className="px-3 py-2 text-right font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {photo.cards.map((card) => (
                      <tr
                        key={`${photo.image}-${card.pos}`}
                        className="border-t border-border/60 hover:bg-muted/30"
                      >
                        <td className="px-3 py-2 align-middle font-medium text-muted-foreground">
                          {card.pos}
                        </td>
                        <td className="px-3 py-2 align-middle">
                          <a
                            href={card.thumb}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={card.thumb}
                              alt={card.card}
                              width={110}
                              height={150}
                              className="h-auto w-[110px] rounded border border-border bg-muted object-contain"
                              unoptimized
                            />
                          </a>
                        </td>
                        <td className="px-3 py-2 align-middle font-medium">
                          {card.card}
                        </td>
                        <td className="px-3 py-2 align-middle text-muted-foreground">
                          {card.set}
                        </td>
                        <td className="px-3 py-2 text-right align-middle font-semibold text-emerald-600">
                          {formatUsd(card.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>

      <footer className="mt-10 rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
        <p>
          Card identification was performed by reading set codes and card numbers
          from each crop and cross-referencing against the Collectr CSV export.
          Prices reflect the &quot;Market Price&quot; column in the export at
          the time of identification.
        </p>
      </footer>
    </main>
  );
}
