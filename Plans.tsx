
import React, { useState } from 'react';
import { Plan } from '../types';

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const plans: Plan[] = [
    {
      name: "Plano 1: Performance Base",
      features: [
        "Gestão de Tráfego Pago (Salão)",
        "Cardápio Digital para Mesa",
        "Link na Bio Otimizado",
        "CRM Básico (Lista de Clientes)",
        "Dashboard Mensal"
      ],
      fullDetails: "Este plano é focado na atração de novas pessoas para o gastrobar. Inclui gestão profissional de anúncios no Meta e Google com geolocalização precisa no entorno do estabelecimento, além de um cardápio digital otimizado para visualização via QR Code."
    },
    {
      name: "Plano 2: Automação",
      features: [
        "Tudo do Plano 1",
        "Automação de WhatsApp (Réguas)",
        "Gamificação na Mesa (Check-in)",
        "Lembretes de Aniversário Automáticos",
        "Ativação de Cashback"
      ],
      highlight: true,
      fullDetails: "O plano recomendado para escala. Introduz a metodologia de 'Permanência'. Através do QR Code na mesa, capturamos o contato do cliente sem fricção e iniciamos réguas automáticas de relacionamento via WhatsApp para garantir o retorno."
    },
    {
      name: "Plano 3: Experience",
      features: [
        "Tudo do Plano 1 e 2",
        "Social Media Full Strategy",
        "Captação de Conteúdo Presencial",
        "Branding & Identidade Visual",
        "Consultoria Estratégica Quinzenal"
      ],
      fullDetails: "Gestão 360 do pilar 'Presença'. Além de toda a tecnologia e tráfego, cuidamos da narrativa visual do gastrobar, com captação presencial de fotos/vídeos e consultoria de alto nível para posicionamento de marca premium."
    }
  ];

  return (
    <div className="space-y-10 pb-10 relative">
      <header>
        <h2 className="text-4xl font-bold text-slate-800 mb-2 brand-font">Arquitetura de Planos</h2>
        <p className="text-slate-500 text-lg">A escala comercial baseada na maturidade do gastrobar.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, i) => (
          <div key={i} className={`flex flex-col bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
            plan.highlight 
              ? 'border-orange-500 shadow-2xl scale-105 z-10' 
              : 'border-slate-100 shadow-sm hover:border-orange-200'
          }`}>
            <div className={`p-8 text-center ${plan.highlight ? 'bg-orange-50' : 'bg-slate-50'}`}>
              <h3 className="text-lg font-bold text-slate-800">{plan.name}</h3>
              {plan.highlight && (
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mt-3 block">RECOMENDADO PARA ESCALA</span>
              )}
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <button 
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-200 ${
                plan.highlight 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 hover:bg-orange-700' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}>
                Ver Ficha Técnica
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Popup */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPlan(null)}>
          <div className="bg-white rounded-[32px] max-w-lg w-full p-10 shadow-2xl relative animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <span className="text-orange-500 font-bold text-[10px] uppercase tracking-widest mb-2 block">Detalhes Técnicos</span>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 brand-font">{selectedPlan.name}</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              {selectedPlan.fullDetails}
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
               <h4 className="font-bold text-sm text-slate-800 mb-3">Principais entregas:</h4>
               <div className="grid grid-cols-1 gap-2">
                  {selectedPlan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                       <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                       {f}
                    </div>
                  ))}
               </div>
            </div>
            <button 
              onClick={() => setSelectedPlan(null)}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
