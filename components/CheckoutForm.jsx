'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CheckoutForm() {
  const { closeCheckout, submitOrder, isProcessing, checkoutError, setCheckoutError, cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setCheckoutError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.postalCode) {
      setCheckoutError('Semua field harus diisi');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setCheckoutError('Email tidak valid');
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setCheckoutError('Nomor telepon tidak valid (10-15 angka)');
      return;
    }

    await submitOrder(formData);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-surface border border-primary max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b border-primary sticky top-0 bg-surface p-6 flex justify-between items-center">
          <h2 className="font-headline-md text-headline-md text-primary">Checkout</h2>
          <button
            onClick={closeCheckout}
            disabled={isProcessing}
            className="text-on-surface-variant hover:text-primary disabled:opacity-50"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <h3 className="font-label-lg text-label-lg text-primary mb-6 uppercase">Ringkasan Pesanan</h3>
              <div className="space-y-4 mb-6">
                {cart.map((item, idx) => (
                  <div key={`${item.id}-${item.variant}-${idx}`} className="flex justify-between items-start pb-4 border-b border-surface-variant">
                    <div className="flex-1">
                      <p className="font-body-md text-body-md text-on-surface">{item.name}</p>
                      {item.variant && (
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Ukuran: {item.variant}</p>
                      )}
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Qty: {item.qty}</p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface font-semibold text-right">
                      Rp {(item.price * item.qty).toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-primary pt-6">
                <div className="flex justify-between items-center">
                  <p className="font-headline-sm text-headline-sm text-on-surface">Total</p>
                  <p className="font-headline-sm text-headline-sm text-primary">Rp {total.toLocaleString('id-ID')}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="order-1 lg:order-2 space-y-4">
              <h3 className="font-label-lg text-label-lg text-primary uppercase">Data Pengiriman</h3>

              {/* Error Message */}
              {checkoutError && (
                <div className="bg-error/10 border border-error p-4 rounded text-error font-body-sm text-body-sm">
                  {checkoutError}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isProcessing}
                  className="w-full border border-primary p-3 font-body-sm text-body-sm text-on-surface bg-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container disabled:opacity-50"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isProcessing}
                  className="w-full border border-primary p-3 font-body-sm text-body-sm text-on-surface bg-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container disabled:opacity-50"
                  placeholder="Masukkan email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isProcessing}
                  className="w-full border border-primary p-3 font-body-sm text-body-sm text-on-surface bg-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container disabled:opacity-50"
                  placeholder="Masukkan nomor telepon"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Alamat
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={isProcessing}
                  rows={3}
                  className="w-full border border-primary p-3 font-body-sm text-body-sm text-on-surface bg-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container disabled:opacity-50 resize-none"
                  placeholder="Masukkan alamat lengkap"
                />
              </div>

              {/* City */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Kota/Kabupaten
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={isProcessing}
                  className="w-full border border-primary p-3 font-body-sm text-body-sm text-on-surface bg-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container disabled:opacity-50"
                  placeholder="Masukkan kota/kabupaten"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Kode Pos
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  disabled={isProcessing}
                  className="w-full border border-primary p-3 font-body-sm text-body-sm text-on-surface bg-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container disabled:opacity-50"
                  placeholder="Masukkan kode pos"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeCheckout}
                  disabled={isProcessing}
                  className="flex-1 border border-primary p-3 font-label-caps text-label-caps uppercase text-primary hover:bg-surface-variant disabled:opacity-50 transition-colors"
                >
                  Batalkan
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 bg-primary text-on-primary p-3 font-label-caps text-label-caps uppercase hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">hourglass_bottom</span>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Lanjutkan ke Pembayaran
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
