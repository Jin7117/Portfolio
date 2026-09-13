import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="relative border-t rule-line px-6 py-8 text-center text-sm text-ink/50">
      <p className="font-display text-lg text-ink">{profile.name}</p>
      <p className="mt-1">Computer Science · AI · Engineering · Science</p>
      <p className="mt-1">Built with curiosity and code · © {new Date().getFullYear()}</p>
    </footer>
  );
}
