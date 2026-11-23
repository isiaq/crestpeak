import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta('Page Not Found');

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-cyan-500 font-bold text-sm tracking-widest uppercase mb-3">404 Error</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            <ArrowLeft size={16} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
