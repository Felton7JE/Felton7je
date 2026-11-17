import React, { useState } from 'react';
import { ArrowLeft, Shield, Lock, MapPin, Trash2, Mail, ExternalLink, Smartphone, CheckCircle, Printer } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeApp, setActiveApp] = useState<'mclean' | 'quiz'>('mclean');

  return (
    <div className="min-h-screen bg-[#09090C] text-[#F2F2F5] selection:bg-amber-500 selection:text-black">
      {/* Top Bar de Navegação */}
      <header className="sticky top-0 z-50 w-full bg-[#09090C]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Portfólio</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-amber-500/40 transition-colors"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer size={13} />
              <span>Imprimir / PDF</span>
            </button>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              SSL / HTTPS Válido
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Seletor de Aplicações */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-xl bg-[#121217] border border-white/10 max-w-fit">
          <button
            onClick={() => setActiveApp('mclean')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeApp === 'mclean'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            McLeanConnect Mobile (Google Play)
          </button>
          <button
            onClick={() => setActiveApp('quiz')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeApp === 'quiz'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Meu Quiz +
          </button>
        </div>

        {activeApp === 'mclean' ? (
          /* ============================================================ */
          /* POLÍTICA DE PRIVACIDADE: MCLEANCONNECT MOBILE               */
          /* ============================================================ */
          <article className="space-y-10">
            {/* Header da Política */}
            <div className="border-b border-white/10 pb-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
                  ID do Pacote: mcleanconnect.works
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1">
                  <CheckCircle size={12} /> Em conformidade com Google Play
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Política de Privacidade —{' '}
                <span className="text-amber-500">McLeanConnect Mobile</span>
              </h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-400 font-mono">
                <span>Desenvolvedor: <strong>Felton Estêvão</strong></span>
                <span>•</span>
                <span>Última atualização: <strong>17 de Novembro de 2026</strong></span>
                <span>•</span>
                <span>Status: <strong>Vigente e Pública</strong></span>
              </div>
            </div>

            {/* Banner de Aviso de Conformidade Google Play */}
            <div className="p-5 rounded-2xl bg-[#121217] border border-amber-500/30 flex items-start gap-4">
              <Shield className="text-amber-500 shrink-0 mt-0.5" size={24} />
              <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <strong className="text-white block mb-1">Declaração de Transparência e Proteção ao Usuário</strong>
                Esta Política de Privacidade aplica-se à aplicação móvel <strong>McLeanConnect Mobile</strong> (distribuída via Google Play Store com o pacote <code className="text-amber-400 font-mono">mcleanconnect.works</code>), desenvolvida e mantida por <strong>Felton Estêvão</strong>. Ela descreve de forma abrangente e transparente como os dados confidenciais do usuário e do dispositivo são coletados, utilizados, compartilhados, armazenados e eliminados.
              </div>
            </div>

            {/* Sumário Rápido */}
            <div className="p-5 rounded-2xl bg-[#121217] border border-white/10">
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-500 font-mono mb-3">
                Índice de Navegação
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
                <a href="#sec-1" className="hover:text-amber-400 transition-colors">1. Informações e Dados Recolhidos</a>
                <a href="#sec-2" className="hover:text-amber-400 transition-colors">2. Uso de Dados de Localização (GPS)</a>
                <a href="#sec-3" className="hover:text-amber-400 transition-colors">3. Como e Para Que Utilizamos os Dados</a>
                <a href="#sec-4" className="hover:text-amber-400 transition-colors">4. Partilha com Terceiros</a>
                <a href="#sec-5" className="hover:text-amber-400 transition-colors">5. Segurança e Criptografia</a>
                <a href="#sec-6" className="hover:text-amber-400 transition-colors">6. Exclusão de Conta e Eliminação de Dados</a>
                <a href="#sec-7" className="hover:text-amber-400 transition-colors">7. Privacidade de Crianças</a>
                <a href="#sec-8" className="hover:text-amber-400 transition-colors">8. Direitos do Usuário & Contato</a>
              </div>
            </div>

            {/* 1. DADOS RECOLHIDOS */}
            <section id="sec-1" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                1. Informações e Dados Pessoais Recolhidos
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Para viabilizar a conexão confiável entre clientes e prestadores de serviços de limpeza e manutenção técnica, a aplicação recolhe apenas os dados estritamente necessários para o funcionamento da plataforma:
              </p>
              <ul className="space-y-3 text-sm text-zinc-300 pl-4 border-l-2 border-white/10">
                <li>
                  <strong className="text-white">Dados de Identificação e Cadastro:</strong> Nome completo, endereço de e-mail, número de telefone e foto de perfil (opcional para clientes, recomendada para verificação de prestadores).
                </li>
                <li>
                  <strong className="text-white">Dados de Serviços e Agendamentos:</strong> Endereço de prestação do serviço, descrição da solicitação, data e horário agendados, histórico de atendimentos e mensagens trocadas no chat do aplicativo para coordenação do serviço.
                </li>
                <li>
                  <strong className="text-white">Dados de Pagamento Móvel:</strong> Confirmação de status de transação móvel (ex.: M-Pesa, E-Mola ou cartões bancários). <em>Importante: Não armazenamos senhas bancárias, PINs móveis ou números completos de cartões de crédito. O processamento é realizado de forma segura diretamente pelos gateways parceiros licenciados.</em>
                </li>
                <li>
                  <strong className="text-white">Dados Técnicos do Dispositivo:</strong> Modelo do aparelho celular, versão do sistema operacional Android, identificador anônimo de instalação e relatórios de erro (crash logs) para fins de manutenção e estabilidade do aplicativo.
                </li>
              </ul>
            </section>

            {/* 2. LOCALIZAÇÃO */}
            <section id="sec-2" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                2. Uso de Dados de Localização Precisa e Aproximada
              </h2>
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm text-zinc-300 leading-relaxed flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white block mb-1">Por que solicitamos acesso à sua localização?</strong>
                  O <strong>McLeanConnect Mobile</strong> é uma plataforma de serviços sob demanda. Os dados de localização (GPS e rede) são solicitados <strong>apenas com o seu consentimento explícito</strong> e servem para:
                  <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300">
                    <li>Conectar clientes aos prestadores de serviços mais próximos;</li>
                    <li>Preencher automaticamente o endereço do local onde o serviço será realizado;</li>
                    <li>Calcular estimativas de tempo de chegada e rotas de deslocamento;</li>
                    <li>Permitir ao cliente acompanhar o deslocamento do prestador quando o serviço estiver em andamento.</li>
                  </ul>
                  <p className="mt-2 text-xs text-zinc-400">
                    O usuário pode a qualquer momento revogar a permissão de localização nas configurações do Android, ciente de que algumas funções de busca automática por proximidade poderão ficar limitadas.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. COMO UTILIZAMOS OS DADOS */}
            <section id="sec-3" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                3. Como e Para Que Utilizamos os Seus Dados
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Todos os dados coletados são tratados com base nos princípios da necessidade, transparência e segurança, sendo utilizados exclusivamente para:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#121217] border border-white/5">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <Smartphone size={16} className="text-amber-500" /> Operação dos Serviços
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Criar e autenticar sua conta, processar solicitações, coordenar o atendimento e registrar as avaliações dos serviços prestados.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121217] border border-white/5">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <Lock size={16} className="text-amber-500" /> Segurança e Verificação
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Prevenir fraudes, validar a integridade de prestadores e clientes, combater spam e garantir um ambiente de trabalho seguro.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121217] border border-white/5">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <CheckCircle size={16} className="text-amber-500" /> Notificações Importantes
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Enviar alertas em tempo real sobre confirmação de agendamento, chegada do prestador, faturamento e avisos essenciais de segurança.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121217] border border-white/5">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <Shield size={16} className="text-amber-500" /> Ausência de Venda de Dados
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200">Jamais vendemos, alugamos ou comercializamos</strong> os seus dados pessoais ou confidenciais com terceiros para fins de publicidade.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. PARTILHA COM TERCEIROS */}
            <section id="sec-4" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                4. Compartilhamento de Dados com Terceiros
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                O compartilhamento de dados ocorre unicamente quando estritamente necessário para a realização do serviço ou por obrigação legal:
              </p>
              <ul className="space-y-2.5 text-sm text-zinc-300 pl-4 border-l-2 border-white/10">
                <li>
                  <strong className="text-white">Entre Usuários (Cliente e Prestador):</strong> Ao aceitar um serviço, o prestador tem acesso ao nome, foto, telefone de contato e endereço de atendimento fornecidos pelo cliente. Da mesma forma, o cliente visualiza o perfil, telefone e avaliações do prestador designado.
                </li>
                <li>
                  <strong className="text-white">Serviços de Infraestrutura e Notificação:</strong> Utilizamos provedores em nuvem e ferramentas como <em>Google Firebase</em> (para notificações push autenticadas) e <em>Google Maps API</em> (para renderização de mapas e cálculo de endereços).
                </li>
                <li>
                  <strong className="text-white">Obrigações Legais:</strong> Caso solicitado formalmente por autoridades judiciais competentes no cumprimento da legislação aplicável.
                </li>
              </ul>
            </section>

            {/* 5. SEGURANÇA */}
            <section id="sec-5" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                5. Segurança e Armazenamento dos Dados
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Adotamos práticas avançadas de cibersegurança e engenharia de infraestrutura para garantir a confidencialidade e a integridade de seus dados:
              </p>
              <ul className="space-y-2 text-sm text-zinc-300 pl-4 border-l-2 border-white/10">
                <li>Todas as comunicações entre o aplicativo e os servidores operam sob protocolo seguro <strong>HTTPS com criptografia TLS 1.3</strong>.</li>
                <li>Os dados armazenados em bancos de dados utilizam criptografia em repouso e controle de acesso baseado em funções (RBAC).</li>
                <li>Senhas e credenciais de acesso nunca são salvas em texto plano, utilizando funções de hash criptográfico seguras (bcrypt/argon2).</li>
              </ul>
            </section>

            {/* 6. EXCLUSÃO DE DADOS (GOOGLE PLAY REQUIREMENT) */}
            <section id="sec-6" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                6. Política de Exclusão de Conta e Eliminação de Dados
              </h2>
              <div className="p-5 rounded-2xl bg-[#121217] border border-red-500/30 space-y-3">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                  <Trash2 size={18} />
                  <span>Direito à Eliminação Permanente (Google Play Data Deletion Compliance)</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Em total conformidade com as diretrizes do Google Play sobre transparência e controle de dados, qualquer usuário do McLeanConnect Mobile pode solicitar a exclusão definitiva de sua conta e de todos os dados pessoais associados a qualquer momento.
                </p>
                <div className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-300">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-white/10">
                    <strong className="text-white block mb-0.5">Opção A — Pelo próprio aplicativo:</strong>
                    Acesse <em>Menu &gt; Perfil &gt; Configurações da Conta &gt; Excluir Conta</em>.
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-white/10">
                    <strong className="text-white block mb-0.5">Opção B — Por e-mail direto (Sem necessidade de login):</strong>
                    Envie uma mensagem para <a href="mailto:dasilvafelton7@gmail.com" className="text-amber-400 underline font-mono">dasilvafelton7@gmail.com</a> com o assunto <code className="text-zinc-200 bg-black/50 px-1 py-0.5 rounded">Exclusão de Conta — McLeanConnect</code>, informando o endereço de e-mail ou número de telefone associado à sua conta.
                  </div>
                </div>
                <p className="text-xs text-zinc-400 pt-1">
                  <strong>Prazo de Eliminação:</strong> A conta e todas as informações pessoais identificáveis serão excluídas permanentemente de nossos servidores ativos no prazo máximo de <strong>30 (trinta) dias</strong>, mantendo-se unicamente registros anônimos exigidos para cumprimento de obrigações legais fiscais.
                </p>
              </div>
            </section>

            {/* 7. PRIVACIDADE DE CRIANÇAS */}
            <section id="sec-7" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                7. Privacidade de Menores de Idade
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                O <strong>McLeanConnect Mobile</strong> é destinado exclusivamente a pessoas com idade legal para contratar ou prestar serviços (geralmente a partir de 18 anos de idade). Não coletamos, solicitamos ou armazenamos deliberadamente dados de menores de 13 anos. Se tomarmos conhecimento de que dados de uma criança foram coletados inadvertidamente, esses dados serão prontamente eliminados de nossos sistemas.
              </p>
            </section>

            {/* 8. CONTATO E RESPONSÁVEL */}
            <section id="sec-8" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                8. Seus Direitos e Informações de Contato
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Você tem o direito de acessar, corrigir, atualizar, solicitar cópia ou revogar autorizações sobre os seus dados a qualquer momento. Para exercer quaisquer destes direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato com o responsável técnico:
              </p>

              <div className="p-5 rounded-2xl bg-[#121217] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
                    Responsável pelo Tratamento de Dados (DPO)
                  </span>
                  <h3 className="text-base font-bold text-white">Felton Estêvão</h3>
                  <p className="text-xs text-zinc-400">Engenheiro de Software & Infraestrutura</p>
                  <p className="text-xs text-zinc-500 mt-1">Beira / Maputo — Moçambique</p>
                </div>

                <a
                  href="mailto:dasilvafelton7@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs sm:text-sm transition-all"
                >
                  <Mail size={16} />
                  <span>dasilvafelton7@gmail.com</span>
                </a>
              </div>
            </section>
          </article>
        ) : (
          /* ============================================================ */
          /* POLÍTICA DE PRIVACIDADE: MEU QUIZ +                         */
          /* ============================================================ */
          <article className="space-y-10">
            <div className="border-b border-white/10 pb-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
                  Aplicação: Meu Quiz +
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1">
                  <CheckCircle size={12} /> Google Sign-In & Azure
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Política de Privacidade —{' '}
                <span className="text-amber-500">Meu Quiz +</span>
              </h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-400 font-mono">
                <span>Desenvolvedor: <strong>Felton Estêvão</strong></span>
                <span>•</span>
                <span>Última atualização: <strong>17 de Novembro de 2026</strong></span>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                1. Dados Recolhidos
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                A aplicação <strong>Meu Quiz +</strong> recolhe apenas dados fornecidos no login seguro com Google Sign-In: nome de utilizador, endereço de e-mail, foto de perfil pública e progresso de jogo (pontuações, rankings e moedas).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                2. Finalidade e Terceiros
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Os dados são armazenados na nuvem (Microsoft Azure) unicamente para manter a pontuação e ranking dos jogadores. Não vendemos dados nem exibimos anúncios rastreadores invasivos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                3. Exclusão e Contato
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                O utilizador pode solicitar a eliminação completa dos seus dados de jogo enviando um e-mail para{' '}
                <a href="mailto:dasilvafelton7@gmail.com" className="text-amber-400 underline font-mono">
                  dasilvafelton7@gmail.com
                </a>
                .
              </p>
            </section>
          </article>
        )}

        {/* Rodapé da Página */}
        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>© 2026 Felton Estêvão. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-amber-400 transition-colors">Portfólio Principal</a>
            <span>•</span>
            <a href="mailto:dasilvafelton7@gmail.com" className="hover:text-amber-400 transition-colors">dasilvafelton7@gmail.com</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
