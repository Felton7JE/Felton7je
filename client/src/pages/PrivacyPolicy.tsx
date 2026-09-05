export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Voltar ao portfólio
          </a>
          <h1 className="text-4xl font-bold mb-4">
            Política de Privacidade —{" "}
            <span className="text-blue-500">Meu Quiz +</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Última atualização: 5 de setembro de 2026
          </p>
        </div>

        <div className="space-y-10 text-base leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              Esta Política de Privacidade descreve como a aplicação{" "}
              <strong>Meu Quiz +</strong> (doravante "a App"), desenvolvida por{" "}
              <strong>Felton Estêvão</strong>, recolhe, utiliza e protege os
              dados pessoais dos seus utilizadores.
            </p>
            <p className="mt-4">
              Ao utilizar a App, concorda com os termos descritos nesta política.
              Se não concordar, por favor, não utilize a App.
            </p>
          </section>

          <hr className="border-border" />

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Dados recolhidos
            </h2>
            <p>
              A App recolhe os seguintes dados pessoais quando efetua o login
              com a sua conta Google:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Nome de utilizador</strong>{" "}
                — fornecido pela conta Google ou definido por si na App
              </li>
              <li>
                <strong className="text-foreground">Endereço de e-mail</strong>{" "}
                — utilizado como identificador único da sua conta
              </li>
              <li>
                <strong className="text-foreground">Fotografia de perfil</strong>{" "}
                — importada da sua conta Google (opcional)
              </li>
              <li>
                <strong className="text-foreground">
                  Dados de progresso no jogo
                </strong>{" "}
                — pontuações, ranking, moedas, missões e histórico de partidas
              </li>
            </ul>
          </section>

          <hr className="border-border" />

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Como utilizamos os seus dados
            </h2>
            <p>Os dados recolhidos são utilizados exclusivamente para:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>Criar e gerir a sua conta na App</li>
              <li>Guardar o seu progresso, pontuações e conquistas</li>
              <li>Apresentar o seu perfil nos rankings globais da App</li>
              <li>Enviar notificações relacionadas com o jogo (se ativadas)</li>
              <li>Melhorar a experiência de utilização da App</li>
            </ul>
            <p className="mt-4">
              Os seus dados <strong>nunca são vendidos</strong> a terceiros nem
              utilizados para fins publicitários.
            </p>
          </section>

          <hr className="border-border" />

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Partilha de dados com terceiros
            </h2>
            <p>
              A App utiliza os seguintes serviços externos que podem ter acesso
              aos seus dados:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Google Sign-In</strong> —
                para autenticação segura da sua conta
              </li>
              <li>
                <strong className="text-foreground">
                  Microsoft Azure (servidor backend)
                </strong>{" "}
                — para armazenamento dos dados de jogo
              </li>
            </ul>
            <p className="mt-4">
              Cada um destes serviços tem a sua própria política de privacidade,
              que recomendamos que leia.
            </p>
          </section>

          <hr className="border-border" />

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Armazenamento e segurança
            </h2>
            <p>
              Os seus dados são armazenados em servidores seguros na cloud
              (Microsoft Azure). Utilizamos comunicações cifradas (HTTPS/TLS)
              para proteger a transmissão de dados entre a App e os nossos
              servidores.
            </p>
            <p className="mt-4">
              Não armazenamos palavras-passe — a autenticação é feita
              exclusivamente através do Google.
            </p>
          </section>

          <hr className="border-border" />

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Os seus direitos
            </h2>
            <p>Como utilizador, tem os seguintes direitos:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Acesso</strong> — pode
                consultar os dados que guardamos sobre si
              </li>
              <li>
                <strong className="text-foreground">Retificação</strong> — pode
                alterar o seu nome de utilizador diretamente na App
              </li>
              <li>
                <strong className="text-foreground">Eliminação</strong> — pode
                eliminar a sua conta permanentemente nas definições da App
              </li>
              <li>
                <strong className="text-foreground">Portabilidade</strong> —
                pode solicitar uma cópia dos seus dados por e-mail
              </li>
            </ul>
          </section>

          <hr className="border-border" />

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Retenção de dados
            </h2>
            <p>
              Os seus dados são mantidos enquanto a sua conta estiver ativa. Ao
              eliminar a sua conta, todos os dados associados são removidos
              permanentemente dos nossos servidores no prazo de 30 dias.
            </p>
          </section>

          <hr className="border-border" />

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Alterações a esta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Quando o fizermos, atualizaremos a data de "última atualização" no
              topo desta página. Recomendamos que reveja esta política
              regularmente.
            </p>
          </section>

          <hr className="border-border" />

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
            <p>
              Se tiver questões sobre esta Política de Privacidade ou sobre os
              seus dados, pode contactar-nos pelo e-mail:
            </p>
            <p className="mt-4">
              <a
                href="mailto:dasilvafelton7@gmail.com"
                className="text-blue-500 hover:underline font-medium"
              >
                dasilvafelton7@gmail.com
              </a>
            </p>
          </section>

          <hr className="border-border" />

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Felton Estêvão — Meu Quiz +. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
