This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Custom Email Template

Copy this to Supabase Dashboard → Authentication → Email Templates → Sign up:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EditGuide - Confirm Your Account</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0a0a0b;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    }
    .container {
      max-width: 480px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .logo {
      text-align: center;
      margin-bottom: 32px;
    }
    .logo img {
      width: 120px;
      height: auto;
    }
    .card {
      background-color: #141416;
      border: 1px solid #27272a;
      border-radius: 16px;
      padding: 32px;
    }
    h1 {
      color: #ffffff;
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 12px 0;
      text-align: center;
    }
    p {
      color: #a1a1aa;
      font-size: 14px;
      line-height: 1.6;
      margin: 0 0 24px 0;
      text-align: center;
    }
    .code-container {
      background-color: #0a0a0b;
      border: 1px solid #27272a;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin: 24px 0;
    }
    .code {
      color: #8b5cf6;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 8px;
    }
    .footer {
      text-align: center;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #27272a;
    }
    .footer p {
      color: #52525b;
      font-size: 12px;
      margin: 0;
    }
    .note {
      background-color: #1c1c1f;
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;
    }
    .note p {
      color: #71717a;
      font-size: 12px;
      margin: 0;
      text-align: left;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <img src="https://i.postimg.cc/Gh7HFxgR/image-removebg-preview.png" alt="EditGuide">
    </div>
    
    <div class="card">
      <h1>Verify Your Email</h1>
      <p>Welcome to EditGuide! Use the verification code below to confirm your account.</p>
      
      <div class="code-container">
        <div class="code">{{ .Token }}</div>
      </div>
      
      <div class="note">
        <p>This code will expire in 24 hours. If you didn't create an account, you can safely ignore this email.</p>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2024 EditGuide. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
```