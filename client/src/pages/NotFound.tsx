import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#09090C] text-[#F2F2F5] px-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-[#121217] border border-white/10 text-center shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="relative p-4 rounded-full bg-amber-500/10 border border-amber-500/20">
            <AlertCircle className="h-10 w-10 text-amber-500" />
          </div>
        </div>

        <h1 className="text-5xl font-black text-white mb-2 font-sans tracking-tight">404</h1>

        <h2 className="text-lg font-semibold text-zinc-300 mb-3 font-sans">
          Página não encontrada
        </h2>

        <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-light">
          A página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleGoHome}
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md cursor-pointer"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar para o Início
          </button>
        </div>
      </div>
    </div>
  );
}
