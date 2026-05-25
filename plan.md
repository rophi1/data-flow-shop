# Implementation Plan: Data Bundle Selling Website (Ghana Edition)

Update the existing data bundle selling website to use Ghana Cedis (GHS) and Ghanaian telecommunication networks.

## Scope Summary
- **Currency Update**: Change all price displays from Naira (₦) to Ghana Cedis (GH₵/GHS).
- **Network Update**: Change Nigerian networks (MTN, Airtel, Glo, 9mobile) to Ghanaian networks (MTN GH, Telecel, AT).
- **Localization**: Update contact information and footer to reflect a Ghanaian business context.
- **Paystack Integration**: Maintain Paystack integration using the existing public key, ensuring amounts are correctly handled in GHS (pesewas).

## Affected Areas
- `src/data/bundles.ts`: Update network names and bundle prices in GHS.
- `src/components/BundleGrid.tsx`: Update currency symbols and network filter tabs.
- `src/components/CheckoutModal.tsx`: Update currency symbols and payment logic if necessary (though Paystack handles the currency based on the transaction, we should ensure the UI matches).
- `src/components/Footer.tsx`: Update localization text.
- `src/pages/Contact.tsx`: Update address and contact details to Ghana.
- `src/components/Hero.tsx`: Update copy to mention Ghana.

## Steps

### 1. Data Update (frontend_engineer)
- Modify `src/data/bundles.ts` to replace Nigerian networks with:
    - MTN GH
    - Telecel (formerly Vodafone)
    - AT (formerly AirtelTigo)
- Set realistic GHS prices for these bundles.

### 2. UI Currency & Network Update (frontend_engineer)
- Update `src/components/BundleGrid.tsx`:
    - Change currency symbol to `GH₵`.
    - Update network filter buttons.
    - Update network icons/colors if needed.
- Update `src/components/CheckoutModal.tsx`:
    - Change currency symbol to `GH₵`.
    - Ensure Paystack amount is correctly passed.

### 3. Localization (quick_fix_engineer)
- Update `src/components/Footer.tsx`: Change "Nigeria" to "Ghana" and update network partners.
- Update `src/pages/Contact.tsx`: Update address to a Ghanaian location (e.g., Accra).
- Update `src/components/Hero.tsx`: Update description text if it mentions Nigeria.

### 4. Validation
- Verify all prices show "GH₵" or "GHS".
- Verify networks are Ghanaian.
- Ensure build passes.
