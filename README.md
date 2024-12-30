# Next.js Role-Based Authentication Template

A modern, full-stack authentication template built with Next.js 15, featuring role-based access control, a beautiful UI, and robust security features.

## Author

**Waseem Anjum**  
Website: [waseemanjum.com](https://waseemanjum.com)  
GitHub: [@fabwaseem](https://github.com/fabwaseem)

## Features

- 🔐 **Authentication**

  - Email/Password authentication
  - Google OAuth integration
  - Session management with NextAuth.js
  - Secure password hashing with bcrypt

- 👥 **Role-Based Access Control**

  - User roles (Admin/User)
  - Protected routes and API endpoints
  - Role-specific UI components
  - Admin dashboard for user management

- 🎨 **Modern UI/UX**

  - Responsive design
  - Dark theme
  - Glassmorphism effects
  - Smooth animations with Framer Motion
  - Form validation with React Hook Form
  - Beautiful icons from React Icons

- 🛠️ **Technical Stack**

  - Next.js 15 (App Router)
  - TypeScript
  - Tailwind CSS
  - Prisma ORM
  - PostgreSQL
  - NextAuth.js
  - Zod validation

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fabwaseem/nextjs-role-based-auth.git
   cd nextjs-role-based-auth
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your:

   - Database URL
   - NextAuth secret
   - Google OAuth credentials (optional)

4. Initialize the database:

   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:

   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see your application.

## Project Structure

```
├── app/                  # Next.js app router pages
│   ├── (auth)/          # Authentication pages (login/signup)
│   ├── admin/           # Admin dashboard
│   ├── dashboard/       # User dashboard
│   └── api/             # API routes
├── components/          # React components
│   ├── landing/        # Landing page components
│   └── layouts/        # Layout components
├── lib/                # Utility functions
│   ├── actions/        # Server actions
│   ├── prisma/         # Database client
│   └── validations/    # Zod schemas
├── prisma/             # Database schema
└── types/              # TypeScript types
```

## Authentication Flow

1. **Email/Password Registration**:

   - User submits registration form
   - Password is hashed using bcrypt
   - User is created in database
   - Automatic sign-in after registration

2. **Google OAuth**:

   - User clicks "Continue with Google"
   - Google OAuth flow handles authentication
   - User account is created/updated
   - Session is established

3. **Role-Based Access**:

   - Users have default role of "USER"
   - Admins can modify user roles
   - Protected routes check user roles
   - UI adapts based on user role

## Customization

### Adding New Roles

1. Update the Role enum in `prisma/schema.prisma`:

   ```prisma
   enum Role {
     USER
     ADMIN
     CUSTOM_ROLE
   }
   ```

2. Run database migration:

   ```bash
   npx prisma migrate dev
   ```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors: Update `bg-accent` classes for primary colors

### Adding OAuth Providers

1. Update `.env` with provider credentials
2. Modify `auth.ts` configuration
3. Add provider button in login/signup pages

## Security Features

- CSRF protection
- HTTP-only cookies
- Input validation with Zod
- Secure password hashing
- Protected API routes
- Rate limiting (TODO)

## Deployment

1. Set up a PostgreSQL database
2. Configure environment variables
3. Deploy to your preferred platform:
   ```bash
   pnpm build
   pnpm start
   ```

Recommended platforms:

- Vercel (optimal for Next.js)
- Railway (easy database setup)
- Heroku

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you find this template helpful, please give it a ⭐️ on GitHub! You can also [buy me a coffee](https://waseemanjum.com) to support my work.
