import Excerpt from "../components/excerpt";


const About = () => {
    return (
        <div className="main">
            <Excerpt />

            <section className="all-info">
                <section className="education">
                    <h2>Education</h2>

                    <div className="flex --education">
                        <div className="category">
                            <h3>FIAP</h3>
                            <p>Bachelor's in Software Development</p>
                        </div>

                        <div className="category">
                            <h3>UNIVILLE</h3>
                            <p>Bachelor's in Design</p>
                        </div>
                    </div>
                </section>
                <section className="highlights">
                    <h2>Experiences</h2>
                    <ul>
                        <li>
                            Padronizei a UI desenvolvendo estilos customizados de componentes JavaScript, eliminando dependência de frameworks.
                        </li>
                        <li>
                            Implementei camada de cache persistente com Pickle e SimpleCache para armazenamento local de consultas, reduzindo drasticamente o tempo de resposta ao evitar chamadas repetidas aos bancos de origem, e estruturei carregamento assíncrono com Threading e Cache Lock para gerenciar atualizações concorrentes dos dados em cache, garantindo consistência e evitando condições de corrida.
                        </li>
                        <li>
                            Automatizei a detecção de faltas no planejamento produtivo integrando dados de itens: em estoque, em transferência, em produção, cruzando capacidade fabril com demanda planejada e sinalizando divergências em tempo real para tomada de decisão ágil.
                        </li>
                        <li>
                            Implementei suíte de testes automatizados com cobertura mínima de 80%, executados via Azure DevOps em todo pull request, garantindo qualidade e estabilidade contínua do sistema.
                        </li>
                        <li>
                            Desenvolvi API Rest para consulta de dados em tempo real com exposição de métricas via Prometheus, permitindo monitoramento contínuo de latência, throughput e detecção de gargalos nas consultas aos bancos de origem.
                        </li>
                    </ul>
                </section>
                <section className="tech-stack">
                    <h2>Stack</h2>

                    <div className="flex --stack">
                        <div className="category">
                            <h3>Cloud & Infrastructure</h3>
                            <p>AWS · Azure · Kubernetes · Kafka</p>
                        </div>

                        <div className="category">
                            <h3>CI/CD & Automation</h3>
                            <p>Azure DevOps · GitHub Actions</p>
                        </div>

                        <div className="category">
                            <h3>Data & Storage</h3>
                            <p>Snowflake · SyBase · MS SQL Server</p>
                        </div>

                        <div className="category">
                            <h3>Programming Languages</h3>
                            <p>Python · JavaScript · TypeScript · React</p>
                        </div>

                        <div className="category">
                            <h3>Observability</h3>
                            <p>Prometheus</p>
                        </div>

                        <div className="category">
                            <h3>Spoken Languages</h3>
                            <p>Português (nativo) · English (C2 fluent) · Français (débutant)</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default About;