// src/pages/Home.tsx
import "../Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const stats = {
    financeiro: {
      receitaMensal: "R$ 45.280,00",
      inadimplencia: "8,2%",
      mensalidadesPagas: "87%",
    },
    comercial: {
      novasMatriculas: 24,
      taxaConversao: "35%",
      leadsAtivos: 156,
    },
    educacional: {
      totalAlunos: 342,
      taxaFrequencia: "94%",
      professores: 18,
    },
  };

  return (
    <div className="home-container">
      {/* Cabeçalho */}
      <header className="home-header">
        <div className="header-left">
          <img src="/images/white-logo.png" alt="Infly" className="logo" />
          <h1>Tela Inicial</h1>
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/perfil">Meu Perfil</Link>
          <button className="chatbot-btn" onClick={() => window.open('/chat', '_blank')}>
            🤖 Chatbot AI
          </button>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="home-main">
        {/* Hero */}
        <section className="home-hero">
          <h2>Bem-vindo de volta à Infly English School!</h2>
          <p>Resumo geral da sua escola - {new Date().toLocaleDateString("pt-BR")}</p>
          <div className="hero-actions">
            <button className="chatbot-hero-btn" onClick={() => window.open('/chat', '_blank')}>
              🤖 Conversar com AI Assistant
            </button>
          </div>
        </section>

        {/* Cards com Estatísticas */}
        <section className="home-cards">
          <div className="home-card">
            <div className="card-header">
              <h3>💰 Financeiro</h3>
              <span className="card-badge">Este mês</span>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{stats.financeiro.receitaMensal}</div>
                <div className="stat-label">Receita Total</div>
              </div>
              <div className="stat-item">
                <div className="stat-value warning">{stats.financeiro.inadimplencia}</div>
                <div className="stat-label">Inadimplência</div>
              </div>
              <div className="stat-item">
                <div className="stat-value success">{stats.financeiro.mensalidadesPagas}</div>
                <div className="stat-label">Mensalidades Pagas</div>
              </div>
            </div>
            <button className="card-action-btn">Ver Relatórios Detalhados</button>
          </div>

          <div className="home-card">
            <div className="card-header">
              <h3>📈 Comercial</h3>
              <span className="card-badge">30 dias</span>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value highlight">
                  +{stats.comercial.novasMatriculas}
                </div>
                <div className="stat-label">Novas Matrículas</div>
              </div>
              <div className="stat-item">
                <div className="stat-value success">{stats.comercial.taxaConversao}</div>
                <div className="stat-label">Taxa de Conversão</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.comercial.leadsAtivos}</div>
                <div className="stat-label">Leads Ativos</div>
              </div>
            </div>
            <button className="card-action-btn">Gerenciar Campanhas</button>
          </div>

          <div className="home-card">
            <div className="card-header">
              <h3>🎓 Educacional</h3>
              <span className="card-badge">Ativo</span>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{stats.educacional.totalAlunos}</div>
                <div className="stat-label">Total de Alunos</div>
              </div>
              <div className="stat-item">
                <div className="stat-value success">
                  {stats.educacional.taxaFrequencia}
                </div>
                <div className="stat-label">Taxa de Frequência</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.educacional.professores}</div>
                <div className="stat-label">Professores</div>
              </div>
            </div>
            <button className="card-action-btn">Ver Calendário Acadêmico</button>
          </div>
        </section>

        {/* Chatbot */}
        <section className="chatbot-card-section">
          <div className="chatbot-card">
            <div className="chatbot-card-header">
              <h3>🤖 AI Assistant - Infly Chatbot</h3>
              <span className="card-badge">Online</span>
            </div>
            <div className="chatbot-content">
              <div className="chatbot-info">
                <p className="chatbot-description">
                  Nosso assistente inteligente está aqui para ajudar você com:
                </p>
                <ul className="chatbot-features">
                  <li>📊 Análise de dados e relatórios</li>
                  <li>🎓 Dúvidas sobre alunos e turmas</li>
                  <li>💬 Suporte pedagógico instantâneo</li>
                  <li>📅 Agendamento e calendário</li>
                  <li>💰 Consultas financeiras</li>
                </ul>
              </div>
              <div className="chatbot-actions">
                <button className="chatbot-primary-btn" onClick={() => window.open('/chat', '_blank')}>
                  🚀 Iniciar Conversa
                </button>
                <button className="chatbot-secondary-btn">📚 Ver Tutoriais</button>
              </div>
            </div>
          </div>
        </section>

        {/* Ações Rápidas */}
        <section className="quick-actions">
          <h3>Ações Rápidas</h3>
          <div className="actions-grid">
            <button className="action-btn">
              <span className="action-icon">➕</span> Nova Matrícula
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span> Gerar Relatório
            </button>
            <button className="action-btn">
              <span className="action-icon">📅</span> Agendar Aula
            </button>
            <button className="action-btn">
              <span className="action-icon">💬</span> Enviar Comunicado
            </button>
          </div>
        </section>
      </main>

      {/* Chatbot Floating Button */}
      <button className="floating-chatbot-btn" onClick={() => window.open('/chat', '_blank')}>
        🤖
      </button>

      {/* Rodapé */}
      <footer className="home-footer">
        © {new Date().getFullYear()} Infly English School - Todos os direitos reservados.
      </footer>
    </div>
  );
}
