
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { CompetitorData } from '../types';

const WarRoom: React.FC = () => {
  const [insight, setInsight] = useState<string>('Selecione um player abaixo para visualizar a análise estratégica imediata baseada no Relatório de Inteligência.');
  const [loading, setLoading] = useState(false);

  const competitors: CompetitorData[] = [
    {
      name: "Retorne.app",
      tagline: "Venda Mais / Recuperação",
      focus: "Recuperação de Vendas via WhatsApp",
      strength: "Roleta de Prêmios (Gamificação Lead Gen)",
      weakness: "SUPERFICIALIDADE NA GESTÃO/COZINHA",
      preAnalysis: "A Retorne opera no topo do funil com foco agressivo em 'recuperação'. Sua vulnerabilidade é a desconexão com o back-office. O Guio Cook deve atacar integrando a eficiência da cozinha ao CRM, algo que eles não fazem por serem uma ferramenta pontual.",
      seo: { h1: "O CRM Nº1 para Restaurantes", keywords: ["recuperação de clientes", "fidelidade"] },
      scores: { product: 7, process: 9, people: 5, gamification: 9, automation: 9 }
    },
    {
      name: "Sisfood",
      tagline: "Fortaleza Operacional",
      focus: "Ecossistema All-in-one",
      strength: "Marketing Nativo integrado ao ERP",
      weakness: "COMPLEXIDADE DE IMPLEMENTAÇÃO / UI LEGADA",
      preAnalysis: "O Sisfood é o gigante da operação, mas sofre com uma UI legada e alta fricção de setup. O Guio vence na agilidade (setup < 24h) e na UX moderna, focando no marketing de salão sem a carga pesada de um ERP legado.",
      seo: { h1: "Marketing e Aumento de Vendas", keywords: ["sistema completo", "gestão restaurante"] },
      scores: { product: 9, process: 8, people: 6, gamification: 6, automation: 7 }
    },
    {
      name: "Alloy",
      tagline: "O Construtor de Marcas",
      focus: "Brand Builder & UX Premium",
      strength: "Apps White Label de alta performance",
      weakness: "DEPENDENTE DE VOLUME PARA ROI DE BRANDING",
      preAnalysis: "A Alloy vende status e marca. O gap é que branding sozinho não traciona dias fracos sem automação de processos. O Guio Cook oferece o ROI imediato da gamificação de staff, garantindo que o investimento se pague no salão.",
      seo: { h1: "O sistema completo para restaurante", keywords: ["fidelidade", "cashback"] },
      scores: { product: 8, process: 7, people: 4, gamification: 8, automation: 8 }
    },
    {
      name: "Fidelimax",
      tagline: "O Especialista em Inteligência",
      focus: "Retenção Técnica & NPS",
      strength: "NPS Nativo & Inteligência de Dados",
      weakness: "DESCONECTADO DA OPERAÇÃO DE VENDA REAL",
      preAnalysis: "Fidelimax é ciência de dados pura, mas passiva. O Guio transforma o dado em ação imediata no momento do consumo através do QR Code de mesa, unindo a inteligência de retenção à oportunidade real de venda.",
      seo: { h1: "Aumente as vendas do seu negócio", keywords: ["fidelidade", "pesquisa satisfação"] },
      scores: { product: 7, process: 8, people: 9, gamification: 7, automation: 8 }
    }
  ];

  const chartData = [
    { subject: 'UX/Produto', guio: 9, market: 7 },
    { subject: 'Processo (Auto)', guio: 10, market: 8 },
    { subject: 'Staff (Pessoas)', guio: 10, market: 5 },
    { subject: 'Gamificação', guio: 9, market: 8 },
    { subject: 'Integração CRM', guio: 10, market: 7 },
  ];

  const selectCompetitor = (comp: CompetitorData) => {
    setLoading(true);
    setTimeout(() => {
      setInsight(comp.preAnalysis);
      setLoading(false);
    }, 200);
  };

  return (
    <div className="space-y-10 pb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-orange-100 pb-6">
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2 brand-font">War Room: Benchmarking</h2>
          <p className="text-slate-500 text-lg font-medium">Análise de White Spaces (Gastrobares & Eventos).</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full border border-orange-200 uppercase">DADOS: FEV 2026</span>
          <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">STRATEGIC INTELLIGENCE</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Radar Chart Container com minWidth e minHeight fixos */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 min-h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-800">Guio vs. Média de Mercado</h3>
            <div className="flex gap-4 text-[10px] font-bold uppercase">
               <span className="flex items-center gap-1"><span className="w-3 h-3 bg-orange-500 rounded-sm"></span> GUIO COOK</span>
               <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-400 rounded-sm"></span> MERCADO</span>
            </div>
          </div>
          <div className="flex-1 w-full min-h-[350px]">
            <ResponsiveContainer width="100%" height="100%" minHeight={350}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#f1f5f9" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} />
                <Radar name="Guio Cook" dataKey="guio" stroke="#ea580c" fill="#ea580c" fillOpacity={0.4} />
                <Radar name="Mercado" dataKey="market" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.1} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          <div className="bg-[#0f172a] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col flex-1 min-h-[500px]">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
            </div>
            
            <h3 className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4">ADVISÓRIA ESTRATÉGICA AI</h3>
            
            <div className="flex-1 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-500/30"></div>
              <div className="pl-6 h-full flex items-center">
                <p className="text-slate-300 text-base leading-relaxed italic font-serif transition-all duration-300">
                  {loading ? "Processando dados..." : `"${insight}"`}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-4 tracking-widest text-center">SIMULAR CONFRONTO VS:</p>
              <div className="grid grid-cols-2 gap-3">
                {competitors.map((comp) => (
                  <button 
                    key={comp.name}
                    onClick={() => selectCompetitor(comp)}
                    className="text-center px-4 py-3 bg-white/5 hover:bg-orange-600 hover:text-white rounded-xl text-[11px] font-bold border border-white/5 transition-all duration-200"
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarRoom;
