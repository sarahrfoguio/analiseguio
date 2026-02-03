
import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <div className="space-y-12 pb-20 animate-in fade-in duration-700">
      <header>
        <h2 className="text-4xl font-bold text-slate-800 mb-2 brand-font">7. Convergência Estratégica: Benchmarking</h2>
        <p className="text-slate-500 text-lg">Cruzamento de dados entre concorrentes e as diretrizes do GUIO.</p>
      </header>

      {/* 7.1 Análise de Gaps */}
      <section className="bg-white p-10 rounded-3xl border border-orange-100 shadow-sm">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">7.1. Análise de Gaps (Lacunas) e Oportunidades</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          O mercado apresenta uma divisão clara: de um lado, sistemas generalistas (Sisfood, Alloy) focados na operação; 
          de outro, especialistas em <em>growth</em> (Retorne, Fidelimax). O GUIO tem a oportunidade de ser o <strong>Híbrido Metodológico</strong>, 
          focando em Gastrobares e Casas de Eventos.
        </p>
      </section>

      {/* Tabela 5 */}
      <section className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
        <div className="p-8 border-b border-slate-50 bg-slate-50/50">
           <h3 className="text-xl font-bold text-slate-800 uppercase text-xs tracking-widest">Tabela 5: Matriz Comparativa de Funcionalidades e Metodologia</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[10px] uppercase font-black tracking-widest">
                <th className="px-6 py-4">Recurso / Pilar 3Ps</th>
                <th className="px-6 py-4">Retorne.app (Levilo)</th>
                <th className="px-6 py-4">Sisfood</th>
                <th className="px-6 py-4">Alloy</th>
                <th className="px-6 py-4">Fidelimax</th>
                <th className="px-6 py-4 bg-orange-600">Oportunidade GUIO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11px] font-medium text-slate-600 leading-tight">
              <tr className="align-top">
                <td className="px-6 py-6 font-black bg-slate-50 text-slate-800">Gamificação (Mecânica)</td>
                <td className="px-6 py-6">Sorte (Roleta)</td>
                <td className="px-6 py-6">Pontos por Compra</td>
                <td className="px-6 py-6">Pontos & Cashback</td>
                <td className="px-6 py-6">Cashback & Pontos</td>
                <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50"><strong>Híbrido:</strong> Roleta na entrada (Lead Gen) e Cashback na retenção. Missões (ex: "Prove o cardápio").</td>
              </tr>
              <tr className="align-top">
                <td className="px-6 py-6 font-black bg-slate-50 text-slate-800">Integração Omnichannel</td>
                <td className="px-6 py-6">QR Code + WhatsApp</td>
                <td className="px-6 py-6">Nativa (PDV Integrado)</td>
                <td className="px-6 py-6">App/Site/Totem</td>
                <td className="px-6 py-6">Via API</td>
                <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50"><strong>Unificação:</strong> Cliente do salão reconhecido no digital sem fricção (Check-in via QR).</td>
              </tr>
              <tr className="align-top">
                <td className="px-6 py-6 font-black bg-slate-50 text-slate-800">Automação (Processos)</td>
                <td className="px-6 py-6">Reativação Ativa</td>
                <td className="px-6 py-6">Carrinho Abandonado</td>
                <td className="px-6 py-6">Robô de Atendimento</td>
                <td className="px-6 py-6">Régua de Relacionamento</td>
                <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50"><strong>Hiper-personalização:</strong> IA sugerindo ofertas baseadas no sabor/ingrediente favorito.</td>
              </tr>
              <tr className="align-top">
                <td className="px-6 py-6 font-black bg-slate-50 text-slate-800">Pessoas (Staff)</td>
                <td className="px-6 py-6">Foco no dono/gestor</td>
                <td className="px-6 py-6">Suporte técnico</td>
                <td className="px-6 py-6">Robô substitui staff</td>
                <td className="px-6 py-6">Foco na experiência</td>
                <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50"><strong>Gamificação Interna:</strong> Módulo para gamificar os garçons (metas de cadastro/venda).</td>
              </tr>
              <tr className="align-top">
                <td className="px-6 py-6 font-black bg-slate-50 text-slate-800">Posicionamento</td>
                <td className="px-6 py-6">"Lucro e Vendas"</td>
                <td className="px-6 py-6">"Gestão Completa"</td>
                <td className="px-6 py-6">"Marca Própria"</td>
                <td className="px-6 py-6">"Inteligência"</td>
                <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50"><strong>"Metodologia de Sucesso":</strong> Consultoria digital embarcada no software.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7.2 Diferencial Cook */}
      <section className="bg-slate-900 p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
        <h3 className="text-3xl font-bold mb-6 brand-font text-orange-500">7.2. O Diferencial "Cook & Metodologias"</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          A terminologia "Cook" sugere conexão com a produção. Enquanto outros focam na venda, 
          o GUIO conecta a fidelidade à <strong>eficiência da cozinha</strong>. 
        </p>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
           <p className="text-orange-100 font-bold italic text-sm">
             "Insight: Ofertar em dobro via notificação push um item que está com excesso de estoque na cozinha (Gestão CMV + CRM). Nenhum concorrente faz isso."
           </p>
        </div>
      </section>

      {/* 8. Estratégia SEO e GEO */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-800 brand-font border-b pb-4">8. Estratégia Mestra de SEO e GEO</h3>
        
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-widest">8.1. Estratégia de Palavras-Chave</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
               <span className="text-[10px] font-black text-red-600 block mb-2">CLUSTER DE ATAQUE</span>
               <p className="text-xs text-slate-600">Evitar confronto direto em "Cardápio Digital" (alto custo). Usar páginas comparativas ("GUIO vs Sisfood").</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
               <span className="text-[10px] font-black text-green-600 block mb-2">CLUSTER DE OPORTUNIDADE</span>
               <p className="text-xs text-slate-600">Dominar: "Metodologia de gestão para restaurantes", "Gamificação para garçons", "Ticket médio com metodologia".</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">8.2. Estratégia GEO</h4>
              <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
                <li>Landing Pages Locais: "Sistema para Restaurantes em [Cidade] - Metodologia GUIO".</li>
                <li>Gestão Google Meu Negócio: Ferramentas para gerenciar reviews e fotos integradas.</li>
              </ul>
           </div>
           <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">8.3. Headings Sugeridas</h4>
              <ul className="text-xs text-slate-500 space-y-2">
                <li><strong>H1:</strong> "Transforme seu Restaurante em uma Máquina de Lucro com a Metodologia GUIO."</li>
                <li><strong>H2:</strong> "O Poder dos 3Ps: Pessoas Engajadas, Processos Automáticos e Produto de Excelência."</li>
              </ul>
           </div>
        </div>
      </section>

      {/* 9. Recomendações Táticas */}
      <section className="bg-orange-50 p-12 rounded-[40px] border border-orange-200">
         <h3 className="text-3xl font-bold mb-8 brand-font text-orange-900 text-center uppercase text-base tracking-widest">9. Recomendações Táticas Imediatas</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500">
               <span className="text-4xl mb-4 block">🎡</span>
               <h4 className="font-bold text-slate-800 mb-2 text-sm">Roleta de Aquisição</h4>
               <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase">Lead Magnet para entrada de novos clientes de forma barata.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500">
               <span className="text-4xl mb-4 block">🤵</span>
               <h4 className="font-bold text-slate-800 mb-2 text-sm">Gamificação de Staff</h4>
               <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase">O garçom ganha estrelas ao cadastrar clientes, resolvendo o gap de uso.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500">
               <span className="text-4xl mb-4 block">⚖️</span>
               <h4 className="font-bold text-slate-800 mb-2 text-sm">Cook & Profit</h4>
               <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase">Painel que cruza dados de venda (CRM) com estoque (Cozinha).</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Roadmap;
