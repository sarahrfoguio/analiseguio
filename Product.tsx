
import React from 'react';

const Product: React.FC = () => {
  const steps = [
    { icon: "📸", title: "1. QR Code", desc: "Adesivo minimalista na mesa. Sem download." },
    { icon: "📍", title: "2. Check-in", desc: "Coleta de Nome/Tel via WhatsApp/Form rápido." },
    { icon: "⭐", title: "3. Feedback", desc: "Avaliação NPS instantânea após o pedido." },
    { icon: "🏆", title: "4. Recompensa", desc: "Liberação de mimos (ex: Café ou Sobremesa)." }
  ];

  return (
    <div className="space-y-12 pb-10">
      <header>
        <h2 className="text-4xl font-bold text-slate-800 mb-2 brand-font">Produto & Gamificação</h2>
        <p className="text-slate-500 text-lg font-medium">Foco 100% em Salão e Experiência de Mesa.</p>
      </header>

      <div className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-100">
        <h3 className="text-center text-xs font-black mb-16 text-slate-400 uppercase tracking-[0.4em]">A JORNADA DO CLIENTE NO SALÃO</h3>
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-2 lg:gap-6 relative">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="w-full md:w-1/4 group transition-all duration-300 z-10 flex flex-col">
                <div className={`p-8 rounded-[32px] transition-all duration-500 border-2 text-center h-full flex flex-col items-center justify-center min-h-[220px] ${
                  i === 1 
                    ? 'bg-orange-600 text-white border-orange-700 shadow-2xl shadow-orange-200 scale-105' 
                    : 'bg-[#FDFDFB] text-slate-800 border-slate-50 shadow-sm hover:border-orange-100 hover:shadow-md'
                }`}>
                  <div className={`text-5xl mb-6 transform transition-transform group-hover:scale-110 duration-300`}>{step.icon}</div>
                  <h4 className="font-black text-sm mb-3 uppercase tracking-tight">{step.title}</h4>
                  <p className={`text-[10px] leading-relaxed font-medium px-2 ${i === 1 ? 'text-orange-100' : 'text-slate-400'}`}>{step.desc}</p>
                </div>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-slate-200 pointer-events-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 brand-font text-slate-800 border-b border-slate-50 pb-4">Diferencial: Sem Integração</h3>
          <p className="text-slate-600 leading-relaxed mb-8 font-medium">
            Ideal para gastrobares e casas de eventos que buscam agilidade. Nosso sistema roda em paralelo ao PDV existente.
          </p>
          <ul className="space-y-5">
            {[
              "Setup rápido em eventos",
              "Independente de Software de Caixa",
              "Dashboard em tempo real"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#ea580c] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-6 brand-font border-b border-white/10 pb-4">Automação Inteligente</h3>
          <p className="text-orange-50 text-sm mb-8 leading-relaxed font-medium">
            Pós-check-in: O sistema mantém o frequentador engajado com a marca.
          </p>
          <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
            {[
              { label: "Aniversários", icon: "🎂" },
              { label: "Check-in Mesa", icon: "✨" },
              { label: "Lembrete Evento", icon: "📅" },
              { label: "Mimo Retorno", icon: "🔥" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 p-5 rounded-2xl border border-white/10 flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
