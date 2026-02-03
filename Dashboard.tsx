
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10 pb-10">
      <header>
        <h2 className="text-5xl font-bold text-slate-800 mb-3 brand-font">Introdução Executiva</h2>
        <p className="text-slate-500 text-xl font-medium">Contextualização do Mercado de Food Service: Gastrobares & Eventos.</p>
      </header>

      <div className="bg-white p-10 rounded-3xl shadow-xl border border-orange-50 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <p>
              O setor de tecnologia para food service no Brasil atravessa um momento de inflexão crítica. 
              Historicamente dominado por sistemas de gestão ERP focados em controle transacional, o mercado 
              evoluiu para uma demanda por <strong className="text-orange-600">"Motores de Crescimento" (Growth Engines)</strong>.
            </p>
            <p>
              Neste novo paradigma, a capacidade de um software processar um pedido é considerada uma commodity; 
              o verdadeiro diferencial competitivo reside na capacidade do sistema de gerar demanda, reter clientes 
              e aumentar o <strong>Lifetime Value (LTV)</strong> através de metodologias proprietárias de CRM e Gamificação.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-center">
            <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest border-b pb-2">O Foco da Análise</h4>
            <p className="text-sm italic text-slate-500 mb-4">
              "O GUIO não busca apenas ser um software, mas uma metodologia de gestão apoiada por tecnologia. 
              Identificamos lacunas de mercado (white spaces) onde a metodologia GUIO possa estabelecer hegemonia."
            </p>
            <div className="flex gap-2">
               <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase">Pessoas</span>
               <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase">Processos</span>
               <span className="px-2 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase">Produto</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-6xl">📡</span></div>
          <h3 className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">A Era da Independência</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ferramentas modernas posicionam-se como libertadoras, oferecendo canais de venda direta 
            para reduzir o Custo de Aquisição de Clientes (CAC) em Gastrobares e Casas de Eventos.
          </p>
        </div>
        <div className="bg-orange-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-6xl">📊</span></div>
          <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">A Era dos Dados (Data-Driven)</h3>
          <p className="text-sm text-orange-50 leading-relaxed">
            A posse do dado do cliente é o novo petróleo. A capacidade de segmentar o comportamento de consumo 
            no salão é o que separa sistemas passivos de ferramentas ativas de vendas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
