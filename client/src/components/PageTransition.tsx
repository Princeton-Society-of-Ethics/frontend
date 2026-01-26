import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in-up">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }

        /* Staggered animations for multiple elements */
        .stagger-item-1 { animation: fadeInUp 0.6s ease-out 0.1s both; }
        .stagger-item-2 { animation: fadeInUp 0.6s ease-out 0.2s both; }
        .stagger-item-3 { animation: fadeInUp 0.6s ease-out 0.3s both; }
        .stagger-item-4 { animation: fadeInUp 0.6s ease-out 0.4s both; }
        .stagger-item-5 { animation: fadeInUp 0.6s ease-out 0.5s both; }
        .stagger-item-6 { animation: fadeInUp 0.6s ease-out 0.6s both; }
        .stagger-item-7 { animation: fadeInUp 0.6s ease-out 0.7s both; }
        .stagger-item-8 { animation: fadeInUp 0.6s ease-out 0.8s both; }
      `}</style>
      {children}
    </div>
  );
}
