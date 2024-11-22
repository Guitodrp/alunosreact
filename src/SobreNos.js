/* eslint-disable jsx-a11y/alt-text */
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sobrenos from './assets/sobrenos.jpg'


function SobreNos() {
    return (
        <div className='aluno-container'>
            <h3>Sobre Nós</h3>
            <body>
                <section>
                    <br />
                    <img src={sobrenos} style={{ width: '950px', height: '300px', borderRadius: '8px', marginRight: '16px', padding: '10px' }}></img>
                    <br />
                    <p>A <strong>High School</strong> é uma instituição educacional comprometida com o desenvolvimento integral de nossos alunos, oferecendo um ambiente acolhedor, inovador e desafiador. Fundada em <strong>1715</strong>, nossa escola busca proporcionar uma formação acadêmica de excelência, aliada à valorização das artes, cultura e esportes, estimulando a criatividade, o pensamento crítico e a cidadania.</p>

                    <p>Com uma equipe pedagógica altamente qualificada e dedicada, utilizamos métodos de ensino atualizados e tecnologias educacionais de ponta, garantindo que nossos alunos sejam preparados para os desafios do futuro. Valorizamos a diversidade, o respeito mútuo e a construção de um ambiente seguro e inclusivo para todos.</p>

                    <p>Nosso compromisso é formar indivíduos capazes de pensar de forma independente, com ética, responsabilidade social e consciência ambiental. Acreditamos que a educação vai além da sala de aula, e incentivamos a participação de nossos alunos em atividades extracurriculares que desenvolvem suas habilidades e competências.</p>

                    <p>A <strong>High School</strong> é mais do que um espaço de aprendizado, é um lugar onde os alunos se tornam cidadãos conscientes, criativos e preparados para transformar o mundo.</p>
                </section>
            </body>
        </div>
    );
}

export default SobreNos;
