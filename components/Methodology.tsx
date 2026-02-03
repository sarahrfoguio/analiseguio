
import React from 'react';
import { Pillar } from '../types';

const Methodology: React.FC = () => {
  const pillars: Pillar[] = [
    {
      id: "P1",
      title: "PRODUTO",
      subtitle: "Plataforma & UX",
      desc: "Robustez técnica e profundidade funcional. Onde o software deixa de ser ferramenta e vira ecossistema.",
      action: "Foco em interface rica, estabilidade e experiência do usuário final (UX/UI).",
      details: ["Arquitetura de dados limpa", "Interface intuitiva", "Estabilidade operacional"],
      color: "border-blue-500"
    },
    {
      id: "P2",
      title: "PROCESSOS",
      subtitle: "Automação set-and-forget",
      desc: "Eficiência operacional através de réguas de relacionamento automáticas que trabalham em background.",
      action: "Eliminação do trabalho manual do dono do restaurante através de automação inteligente.",
      details: ["Réguas de CRM automáticas", "Recuperação de churn", "Alertas de dias fracos"],
      color: "border-orange-500"
    },
    {
      id: "P3",
      title: "PESSOAS",
      subtitle: "Engajamento & Cultura",
      desc: "O pilar negligenciado pela concorrência. Como o sistema engaja a equipe (garçons) e influencia o comportamento do cliente.",
      action: "Gamificação de Staff para garantir que 'o sistema seja usado' e gere dados.",
      details: ["Gamificação de garçons", "Incentivo ao cadastro", "Cultura de dados no salão"],
      color: "border-purple-500"
    }
  ];

  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-4xl font-bold text-slate-800 mb-2 brand-font">Fundamentação Metodológica</h2>
        <p className="text-slate-500 text-lg">Lentes analíticas derivadas das melhores práticas de gestão SaaS.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p) => (
          <div key={p.id} className={`group relative bg-white p-8 rounded-2xl shadow-sm border-t-8 ${p.color} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
            <div className="text-8xl font-black text-slate-50 absolute right-4 top-4 select-none transition-colors group-hover:text-slate-100/50">
              {p.id}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{p.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{p.subtitle}</p>
              <p className="text-slate-600 mb-6 min-h-[80px] leading-relaxed text-sm">
                {p.desc}
              </p>
              <div className="space-y-2 mb-8">
                {p.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    {detail}
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 uppercase mb-2 italic">Diferencial Guio:</span>
                <p className="text-xs font-bold text-slate-700 leading-tight">{p.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-10 rounded-2xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 brand-font text-orange-400">O Híbrido Metodológico</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Enquanto o mercado se divide entre <strong>Generalistas Operacionais</strong> (Sisfood) e <strong>Especialistas em Growth</strong> (Fidelimax), o GUIO se posiciona como o elo perdido: 
              conecta a eficiência da cozinha (Cook) à agressividade de vendas (Growth).
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col gap-4">
             <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Sisfood/Alloy</span>
                <span className="text-orange-500 font-bold">GUIO COOK</span>
                <span className="text-slate-400">Retorne/Fidelimax</span>
             </div>
             <div className="h-2 w-full bg-white/10 rounded-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)] border-2 border-white"></div>
             </div>
             <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-bold">Nicho: Parceiro Estratégico de Crescimento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
