# Converso - SaaS LMS Platform

**Purpose:** A real-time AI teaching platform built with Next.js App Router, Clerk authentication, and Supabase.  
**Scope:** This project demonstrates modern SaaS architecture with AI-powered learning companions.

---

## **1. Project Overview**

Converso is a modern SaaS Learning Management System featuring:

- **AI-Powered Learning Companions** - Interactive AI tutors for various subjects
- **Real-time Voice Interaction** - Powered by Vapi AI for natural conversations
- **User Authentication** - Secure login/signup with Clerk
- **Database Integration** - Supabase for data persistence
- **Modern UI/UX** - Built with Tailwind CSS and Radix UI components
- **Subscription Management** - Built-in billing and subscription handling

### **Tech Stack**

- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **Authentication**: Clerk (@clerk/nextjs v6.33.7)
- **Database**: Supabase
- **AI Integration**: Vapi AI for voice interactions
- **Styling**: Tailwind CSS v4, Radix UI components
- **Monitoring**: Sentry for error tracking

## **2. Getting Started**

### **Prerequisites**

- Node.js 18+
- npm or yarn
- Clerk account (for authentication)
- Supabase account (for database)
- Vapi AI account (for voice interactions)

### **Installation**

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Vapi AI
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

### **Project Structure**

```
├── app/                    # Next.js App Router pages
│   ├── companions/         # AI companion management
│   ├── my-journey/         # User learning journey
│   ├── subscription/       # Subscription management
│   └── sign-in/           # Authentication pages
├── components/            # Reusable UI components
│   ├── ui/                # Base UI components
│   └── *.tsx              # Feature components
├── lib/                   # Utility functions and configurations
│   ├── actions/           # Server actions
│   ├── supabase.ts        # Database client
│   └── vapi.sdk.ts        # AI voice integration
└── types/                 # TypeScript type definitions
```

## **3. Key Features**

### **AI Learning Companions**

- Create custom AI tutors for different subjects (Math, Science, Language, etc.)
- Voice-enabled interactions using Vapi AI
- Personalized learning experiences

### **Authentication & Security**

- Secure user authentication with Clerk
- Protected routes for authenticated users
- User profile management

### **Database Integration**

- Supabase for data persistence
- Real-time updates and synchronization
- Scalable data architecture

### **Modern UI Components**

- Responsive design with Tailwind CSS
- Accessible components with Radix UI
- Custom animations and interactions

## **4. Development**

### **Available Scripts**

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### **Architecture Decisions**

- **Next.js App Router**: Modern routing with server components
- **TypeScript**: Type safety throughout the application
- **Tailwind CSS v4**: Latest styling framework with improved performance
- **Server Actions**: Efficient data mutations without API routes
- **Middleware**: Route protection and authentication handling

## **5. Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## **6. License**

This project is private and proprietary.
