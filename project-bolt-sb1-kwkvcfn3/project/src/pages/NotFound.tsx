import { Link } from 'react-router-dom';
import { Flower2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="text-center">
        <Flower2 className="w-12 h-12 text-rose-300 mx-auto mb-6" strokeWidth={1} />
        <h1 className="font-serif text-5xl font-medium text-earth-800 mb-3">
          Page not found
        </h1>
        <p className="text-earth-500 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has moved. Let's get you
          back to the studio.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-400 text-white font-medium text-sm tracking-wide hover:bg-rose-500 transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
