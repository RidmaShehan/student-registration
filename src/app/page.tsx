import { RegistrationForm } from "@/components/RegistrationForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/80 py-12 px-4 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-3xl">
        <RegistrationForm />
      </main>
    </div>
  );
}
