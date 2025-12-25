# Instant Money - Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- SMTP email credentials (Gmail or other email service)

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your SMTP credentials:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     SMTP_FROM=noreply@instantmoney.com
     NEXT_PUBLIC_APP_URL=http://localhost:3000
     ```

   **For Gmail:**
   - Enable 2-factor authentication
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the app password in `SMTP_PASS`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to http://localhost:3000

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes (OTP sending/verification)
│   ├── apply/             # Loan application flow
│   ├── about-us/          # About Us page
│   ├── contact-us/        # Contact page
│   ├── faqs/              # FAQ page
│   └── ...                 # Other pages
├── components/             # Reusable components
│   ├── loan/              # Loan application components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   └── ...                # Other components
├── lib/                    # Utilities
│   ├── email.ts           # Email service
│   └── otp-store.ts       # OTP storage
└── public/                 # Static assets
```

## Features Implemented

✅ **All Required Pages:**
- Home
- About Us
- News
- Contact Us
- How it Works
- Rate and Terms
- Repay Loan
- FAQ's
- Service Area
- Affiliate Program
- Digital Lending Partners

✅ **Loan Application Flow:**
- Step 1: Email verification with OTP
- Step 2: Profile setup (name, phone, job, address, salary)
- Step 3: Loan approval with lending partner links

✅ **Technology Stack:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Three.js (background animations)
- Swiper (testimonials carousel)
- React Query (data fetching)
- Axios (HTTP requests)
- React Hook Form + Zod (form validation)
- Nodemailer (email service)

✅ **Design Features:**
- Mobile-first responsive design
- SEO optimized with metadata
- Smooth animations and transitions
- Modern UI/UX

## Lending Partners

The following partners are integrated:
- MyCreditBaba (https://www.mycreditbaba.in/)
- WeCredit (https://wecredit.co.in/)
- CreditMantri (https://www.creditmantri.com/)
- MyMudra (https://www.mymudra.com/)
- FinanceBuddha (https://www.financebuddha.com/)

## Next Steps

1. **Configure SMTP:** Set up your email service in `.env.local`
2. **Customize Content:** Update text, images, and branding as needed
3. **Add Filtering:** Implement salary-based filtering for loan partners (currently shows all)
4. **Deploy:** Deploy to Vercel, Netlify, or your preferred hosting platform

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Set environment variables in your hosting platform

3. Deploy to your hosting service

## Support

For issues or questions, please refer to the documentation or contact support.

