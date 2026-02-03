
import React from 'react';
import { SectionId } from '../types';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const menuItems: { id: SectionId; label: string }[] = [
    { id: 'dashboard', label: '1. Resumo Executivo' },
    { id: 'methodology', label: '2. Metodologia 3Ps' },
    { id: 'product', label: '3. Produto & Gamificação' },
    { id: 'warroom', label: '4. Análise de Mercado' },
    { id: 'plans', label: '5. Arquitetura de Planos' },
    { id: 'convergencia', label: '6. Convergência & Tática' },
  ];

  return (
    <nav className="w-full md:w-72 bg-white border-r border-orange-100 flex flex-col z-20 shadow-xl shrink-0">
      <div className="p-8 border-b border-orange-100 flex flex-col items-center text-center">
        <img 
          src="https://i.postimg.cc/YhRxVHgT/LOGO.png" 
          alt="GUIO Logo" 
          className="w-40 mb-4 object-contain" 
        />
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          Estratégia & Análise Gastronômica
        </p>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full text-left px-8 py-4 text-sm font-semibold transition-all duration-200 border-r-4 ${
                  activeSection === item.id
                    ? 'bg-orange-50 text-orange-900 border-orange-600'
                    : 'text-slate-500 hover:bg-orange-50/50 hover:text-slate-900 border-transparent'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 border-t border-orange-100 text-[10px] text-slate-400 space-y-1">
        <p className="font-bold text-slate-500 uppercase">Relatório Estratégico v3.2</p>
        <p>Gastrobares & Casas de Eventos</p>
        <p>Data: 27 Jan 2026</p>
      </div>
    </nav>
  );
};

export default Sidebar;
