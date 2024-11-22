/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import school from './assets/school.jpeg';


function Inicio() {
    return (
        <div className='aluno-container'>
            <h3>Bem vindo a High School</h3>
            <body>
                <section>
                    <p>Estamos muito felizes por tê-lo conosco! Na <span>High School</span>, acreditamos que cada aluno é único e possui um potencial incrível. Estamos aqui para apoiar você em sua jornada de aprendizado, crescimento e descoberta.</p>
                    <p>Aproveite todas as oportunidades que nossa escola oferece e lembre-se: o seu futuro começa aqui!</p>
                    <img src={school} style={{ width: '500px', height: '600px', borderRadius: '8px', marginRight: '16px' }}></img>
                    <p><strong>High School</strong></p>
                </section>
            </body>
        </div >
    );
}

export default Inicio;
