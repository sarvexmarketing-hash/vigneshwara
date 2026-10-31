"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import { X, MapPin, Check, Truck, Clock } from "lucide-react";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [pincode, setPincode] = useState("530007");
  const [checked, setChecked] = useState(false);

  if (!isOpen) return null;

  const supportedZones = [
    { name: "Madhavadhara & Kalinganagar", pin: "530007", time: "Within 2 Hours" },
    { name: "Dwaraka Nagar & Asilmetta", pin: "530016", time: "Daily Morning Route" },
    { name: "MVP Colony & Seethammadhara", pin: "530017", time: "Daily Afternoon Route" },
    { name: "Gajuwaka & Industrial Zone", pin: "530026", time: "Daily Wholesale Dispatch" },
    { name: "Madhurawada & Rushikonda", pin: "530048", time: "Scheduled Delivery" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-5 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            <h3 className="text-base font-bold text-gray-900">
              Select Delivery Location
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Enter 6-Digit Visakhapatnam Pincode
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
                setChecked(false);
              }}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
              placeholder="e.g. 530007"
              maxLength={6}
            />
            <button
              onClick={() => setChecked(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-lg"
            >
              Check Route
            </button>
          </div>
        </div>

        {checked && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-medium">
            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Regular wholesale beverage crate delivery is available for pincode {pincode}!</span>
          </div>
        )}

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
            Key Delivery Hubs Covered
          </span>
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {supportedZones.map((zone) => (
              <div
                key={zone.pin}
                className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-gray-800 block">{zone.name}</span>
                  <span className="text-[11px] text-gray-500">Pincode: {zone.pin}</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {zone.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-2.5 rounded-lg text-xs"
        >
          Confirm Location
        </button>
      </div>
    </div>
  );
};

