import React from "react";
import { notFound } from "next/navigation";
import { getCategoryProductsBySlug, trendingCategoryTiles } from "@/data/products";
import CategoryClientView from "./CategoryClientView";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = [
    ...trendingCategoryTiles.map((t) => ({ slug: t.slug })),
    { slug: "cool-drinks" },
    { slug: "water-bottles" },
  ];
  return slugs;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryData = getCategoryProductsBySlug(params.slug);

  if (!categoryData) {
    notFound();
  }

  return <CategoryClientView slug={params.slug} categoryData={categoryData} />;
}

