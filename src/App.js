import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import cad from './assets/cad.jpeg'
import cad2 from './assets/cad2.png'
import cad3 from './assets/cad3.png'
import cad4 from './assets/cad4.png'
import InserirAluno from './Modals/inserirAlunos';

function App() {
  const baseUrl = 'https://localhost:44390/api/alunos';

  const [data, setData] = useState([]);
  const [modalIncluir, setModalIncluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [updateData, setUpdateData] = useState(true);

  const [alunoSelecionado, setAlunoSelecionado] = useState(
    {
      nome: '',
      email: '',
      idade: ''
    });

  const alunoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error)
      });
  }

  const alunoPut = async () => {
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    await axios.put(baseUrl + "/" + alunoSelecionado.id, alunoSelecionado)
      .then(response => {
        var result = response.data;
        var aux = data;
        aux.map((aluno) => {
          if (aluno.id === alunoSelecionado.id) {
            aluno.nome = result.nome;
            aluno.email = result.email;
            aluno.idade = result.idade;
          }
        });
        toogleModalEditar();
      }).catch(error => {
        console.log(error);
      })

  }

  const alunoPost = async () => {
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    await axios.post(baseUrl, alunoSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        toogleModalIncluir();
        window.location.reload();
      }).catch(error => {
        console.log(error);
      })
  }

  const alunoDelete = async () => {
    await axios.delete(baseUrl + "/" + alunoSelecionado.id)
      .then(response => {
        setData(data.filter(aluno => aluno.id !== response.data));
        toogleModalExcluir();
        window.location.reload();
      }).catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    alunoGet();
    setUpdateData(false);
  }, [updateData]);

  const toogleModalEditar = () => {
    setModalEditar(!modalEditar)
  }

  const toogleModalExcluir = () => {
    setModalExcluir(!modalExcluir)
  }

  const toogleModalIncluir = () => {
    setModalIncluir(!modalIncluir)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado,
      [name]: value
    })
    console.log(alunoSelecionado)
  }

  const selecionarAluno = (aluno, opcao) => {
    setAlunoSelecionado(aluno);
    (opcao === "Editar") && toogleModalEditar();
    (opcao === "Excluir") && toogleModalExcluir();
  }

  return (
    <div className='aluno-container'>
      <h3>Cadastro de Alunos</h3>
      <header>
        <div
          className="box-container" style={{
            display: 'flex', alignItems: 'center', border: '1px solid #ddd', padding: '16px',
            borderRadius: '8px', maxWidth: '250px', margin: '0 auto', cursor: 'pointer'
          }} onClick={() => toogleModalIncluir()} >
          <img src={cad4} alt="Cadastro" style={{ width: '70px', height: 'auto', borderRadius: '8px', marginRight: '16px' }} />
          <p style={{ fontWeight: 'bold', fontSize: '15px', margin: 0 }} >
            Cadastre aqui um novo aluno(a)
          </p>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Idade</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((aluno, index) => (
            <tr key={aluno.id}>
              <td>{index + 1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary" onClick={() => selecionarAluno(aluno, "Editar")}>Editar</button>{" "}
                <button className="btn btn-danger" onClick={() => selecionarAluno(aluno, "Excluir")}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>

        <Modal isOpen={modalIncluir}>
          <ModalHeader>Incluir Aluno</ModalHeader>
          <button className="close-button" />
          <ModalBody>
            <div className='form-group'>
              <label>Nome:</label>
              <input type='text' name='nome' className='form-control' required maxLength={40} onChange={handleChange} />
              <label>Email:</label>
              <input type='email' name='email' className='form-control' required maxLength={40} onChange={handleChange} />
              <label>Idade:</label>
              <input type="number" name='idade' className="form-control" required min={0} max={25} onChange={handleChange} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary' onClick={() => alunoPost()}>Incluir</button>{"  "}
            <button className='btn btn-danger' onClick={() => toogleModalIncluir()}>Cancelar</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEditar}>
          <ModalHeader>Editar Aluno</ModalHeader>
          <ModalBody>
            <div className='form-group'>
              <label>Id:</label>
              <input name='id' className='form-control' disabled value={alunoSelecionado && alunoSelecionado.id}></input>
              <label>Nome:</label>
              <input type='text' name='nome' className='form-control' maxLength={40} required value={alunoSelecionado && alunoSelecionado.nome} onChange={handleChange} />
              <label>Email:</label>
              <input type='email' name='email' className='form-control' maxLength={40} required value={alunoSelecionado && alunoSelecionado.email} onChange={handleChange} />
              <label>Idade:</label>
              <input type="number" name='idade' className="form-control" min={0} max={25} required value={alunoSelecionado && alunoSelecionado.idade} onChange={handleChange} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary' onClick={() => alunoPut()}>Editar</button>{"  "}
            <button className='btn btn-danger' onClick={() => toogleModalEditar()}>Cancelar</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalExcluir}>
          <ModalHeader>Excluir Aluno</ModalHeader>
          <ModalBody>Deseja confirmar a exclusão do(a) aluno(a): <b>{alunoSelecionado.nome}</b> ?</ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={() => alunoDelete()}>Confirmar</button>{"  "}
            <button className='btn btn-secondary' onClick={() => toogleModalExcluir()}>Cancelar</button>
          </ModalFooter>
        </Modal>

      </table>
    </div>
  );
}

export default App;
