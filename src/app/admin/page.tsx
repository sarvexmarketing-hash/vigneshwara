"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { productsData } from "@/data/products";
import { Product } from "@/types";
import {
  Package,
  Inbox,
  Settings,
  Lock,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle,
  ArrowLeft,
  AlertCircle,
  Eye,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"products" | "enquiries" | "settings">("products");

  const [products, setProducts] = useState<Product[]>(productsData);
  const [searchFilter, setSearchFilter] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [saveNotice, setSaveNotice] = useState("");

  const [enquiries, setEnquiries] = useState([
    {
      id: "ENQ-101",
      date: "Today, 10:30 AM",
      customerName: "Srinivas Rao",
      businessName: "Sri Balaji Supermarket, Seethammadhara",
      phone: "+91 98480 12345",
      category: "Soft Drinks",
      quantity: "50 crates (Thums Up & Sprite)",
      status: "Pending Review",
    },
    {
      id: "ENQ-102",
      date: "Yesterday, 4:15 PM",
      customerName: "K. Prasad",
      businessName: "Annapurna Catering Services",
      phone: "+91 99890 54321",
      category: "Packaged Drinking Water",
      quantity: "100 cases Kinley 1L + 50 Thums Up Crates",
      status: "Price Quoted",
    },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "admin123" || passcode.trim() === "vigneshwara2026") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid access passcode. Demo passcode is 'admin123'.");
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to remove this product from the catalog?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setSaveNotice("Product removed successfully (session update).");
      setTimeout(() => setSaveNotice(""), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-surface flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-border shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative h-12 w-44">
              <Image
                src="/images/logo.jpg"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="p-3 bg-brand-subtle rounded-xl text-xs text-brand-emerald mb-6 border border-brand-emerald/20 flex items-start gap-2">
            <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Protected Management Area</span>
              <span>Use demo passcode <code className="bg-white px-1 py-0.5 rounded font-mono">admin123</code> to access the catalog editor and wholesale inquiry manager.</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                Passcode / Access Key
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter access code..."
                className="w-full px-4 py-3 text-sm bg-brand-surface border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-brand-red mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{authError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-brand-emerald hover:bg-brand-forest text-white font-semibold py-3 px-4 rounded-xl shadow transition-all text-sm"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-brand-border text-center">
            <Link
              href="/"
              className="text-xs font-semibold text-brand-emerald hover:underline inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col">
      {/* Admin Header */}
      <header className="bg-brand-forest text-white py-3 px-4 sm:px-8 border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white px-2 py-1 rounded-lg">
              <div className="relative h-8 w-36">
                <Image
                  src="/images/logo.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-[10px] text-brand-yellow uppercase tracking-wider font-semibold border border-brand-yellow/30 px-2 py-0.5 rounded">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-white/80 hover:text-white flex items-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live Site</span>
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-white/90 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Admin Nav Tabs */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex space-x-6">
          <button
            onClick={() => setActiveTab("products")}
            className={`py-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "products"
                ? "border-brand-emerald text-brand-emerald"
                : "border-transparent text-brand-charcoal/70 hover:text-brand-forest"
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Product Catalog ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("enquiries")}
            className={`py-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "enquiries"
                ? "border-brand-emerald text-brand-emerald"
                : "border-transparent text-brand-charcoal/70 hover:text-brand-forest"
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Customer Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`py-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "settings"
                ? "border-brand-emerald text-brand-emerald"
                : "border-transparent text-brand-charcoal/70 hover:text-brand-forest"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Business Details & Hours</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex-1 w-full">
        {saveNotice && (
          <div className="mb-6 p-3 bg-brand-subtle text-brand-emerald text-sm font-semibold rounded-xl border border-brand-emerald/20 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>{saveNotice}</span>
          </div>
        )}

        {/* --- PRODUCTS TAB --- */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="Filter inventory products..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-emerald text-brand-charcoal shadow-sm"
                />
              </div>

              <button
                onClick={() => {
                  const newProd: Product = {
                    id: `prod-${Date.now()}`,
                    name: "New Beverage Product",
                    brand: "Brand Name",
                    category: "soft-drinks",
                    categoryLabel: "Soft Drinks",
                    packageSizes: ["500ml PET", "1L Bottle"],
                    image:
                      "/images/products/drinks_montage.jpg",
                    description: "Premium bottled beverage ready for wholesale distribution.",
                    availability: "Contact for Availability",
                    priceNote: "Price on Request",
                  };
                  setProducts([newProd, ...products]);
                  setEditingProduct(newProd);
                  setSaveNotice("New product template created!");
                  setTimeout(() => setSaveNotice(""), 3000);
                }}
                className="inline-flex items-center justify-center gap-2 bg-brand-emerald text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-brand-forest shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl border border-brand-border shadow-subtle overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-brand-surface border-b border-brand-border text-brand-charcoal/60 uppercase text-[11px] font-bold tracking-wider">
                      <th className="py-3.5 px-4">Product Name</th>
                      <th className="py-3.5 px-4">Brand</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Packaging Sizes</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/60">
                    {filtered.map((item) => (
                      <tr key={item.id} className="hover:bg-brand-surface/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-brand-forest">
                          {item.name}
                        </td>
                        <td className="py-3.5 px-4 text-brand-charcoal">{item.brand}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-subtle text-brand-emerald">
                            {item.categoryLabel}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-brand-charcoal/70">
                          {item.packageSizes.join(", ")}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                            {item.availability}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => setEditingProduct(item)}
                              className="p-1.5 rounded-lg text-brand-emerald hover:bg-brand-subtle transition-colors"
                              title="Edit product"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(item.id)}
                              className="p-1.5 rounded-lg text-brand-red hover:bg-red-50 transition-colors"
                              title="Delete product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- ENQUIRIES TAB --- */}
        {activeTab === "enquiries" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-brand-forest">
                Recent Wholesale Lead Submissions
              </h2>
              <span className="text-xs text-brand-charcoal/60">
                Data synced from web and WhatsApp referrals
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="bg-white p-5 rounded-2xl border border-brand-border shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-brand-emerald">
                        {enq.id}
                      </span>
                      <span className="text-xs text-brand-charcoal/40">•</span>
                      <span className="text-xs text-brand-charcoal/60">{enq.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-brand-forest">
                      {enq.businessName}
                    </h3>
                    <p className="text-xs text-brand-charcoal/80">
                      Contact: <span className="font-semibold">{enq.customerName}</span> ({enq.phone})
                    </p>
                    <p className="text-xs text-brand-charcoal mt-1 bg-brand-surface p-2 rounded-lg border border-brand-border/60">
                      Requested: <span className="font-medium">{enq.quantity}</span> [{enq.category}]
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        enq.status === "Price Quoted"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {enq.status}
                    </span>
                    <button
                      onClick={() =>
                        handleStatusChange(
                          enq.id,
                          enq.status === "Price Quoted" ? "Pending Review" : "Price Quoted"
                        )
                      }
                      className="text-xs text-brand-emerald hover:underline font-semibold"
                    >
                      Toggle status
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- SETTINGS TAB --- */}
        {activeTab === "settings" && (
          <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-subtle space-y-6">
            <div>
              <h2 className="text-lg font-bold text-brand-forest">
                Business Information & Operational Settings
              </h2>
              <p className="text-xs text-brand-charcoal/60 mt-0.5">
                Managed centrally via <code className="bg-brand-surface px-1 py-0.5 rounded">src/data/config.ts</code>
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                  Registered Name
                </label>
                <input
                  type="text"
                  defaultValue={siteConfig.name}
                  readOnly
                  className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-xl text-brand-charcoal"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                    Direct Phone
                  </label>
                  <input
                    type="text"
                    defaultValue={siteConfig.phone}
                    readOnly
                    className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-xl text-brand-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                    WhatsApp Path Number
                  </label>
                  <input
                    type="text"
                    defaultValue={siteConfig.whatsappNumber}
                    readOnly
                    className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-xl text-brand-charcoal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                  Verified Physical Address
                </label>
                <textarea
                  rows={2}
                  defaultValue={siteConfig.address.fullAddress}
                  readOnly
                  className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-xl text-brand-charcoal resize-none"
                />
              </div>

              <div className="pt-2 text-xs text-brand-charcoal/60 leading-relaxed bg-brand-subtle/60 p-3 rounded-xl border border-brand-emerald/15">
                <span className="font-bold text-brand-emerald block mb-0.5">Database Extension Readiness:</span>
                This system is built with isolated type definitions and data stores. To connect PostgreSQL or Supabase in Phase 2, connect your environment credentials to API routes under <code>/src/app/api/products</code> and <code>/src/app/api/enquiries</code> without modifying frontend presentation layers.
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Product Edit / Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-brand-border shadow-2xl">
            <h3 className="text-lg font-bold text-brand-forest">Edit Product Entry</h3>
            <div>
              <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                Product Title
              </label>
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                Brand
              </label>
              <input
                type="text"
                value={editingProduct.brand}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, brand: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-brand-charcoal/70 mb-1">
                Package Sizes (comma separated)
              </label>
              <input
                type="text"
                value={editingProduct.packageSizes.join(", ")}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    packageSizes: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
                className="w-full px-3 py-2 border rounded-xl text-sm"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl border hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setProducts((prev) =>
                    prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
                  );
                  setEditingProduct(null);
                  setSaveNotice("Product updated successfully!");
                  setTimeout(() => setSaveNotice(""), 3000);
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-brand-emerald text-white hover:bg-brand-forest"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
