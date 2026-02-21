"use client";

import { useQuery } from "@tanstack/react-query";
import { useCart, useToast } from "../providers";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: string;
  compareAtPrice: string | null;
  imageUrl: string | null;
  category: string | null;
  inStock: boolean;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products ?? [];
}

export default function ShopPage() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const { addItem } = useCart();
  const { addToast } = useToast();

  function handleAddToCart(product: Product) {
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      imageUrl: product.imageUrl ?? undefined,
    });
    addToast(`${product.name} added to cart`, "success");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Shop</h1>
      <p className="mt-2 text-text-secondary">Browse our full collection</p>

      {isLoading && (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-xl border border-gray-200 bg-white p-4">
              <div className="aspect-square rounded-lg bg-gray-200" />
              <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
              <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          Unable to load products. Make sure your database is connected and seeded.
        </div>
      )}

      {products && products.length === 0 && (
        <div className="mt-8 rounded-lg border border-gray-200 bg-surface p-8 text-center">
          <p className="text-text-secondary">
            No products yet. Add products via the admin panel or API.
          </p>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl text-gray-300">
                    📦
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                {product.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
                    {product.description}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">
                      ${parseFloat(product.price).toFixed(2)}
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-sm text-text-secondary line-through">
                        ${parseFloat(product.compareAtPrice).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {product.inStock ? "Add to Cart" : "Sold Out"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
