import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import cad from './assets/cad.jpeg'
import InserirAluno from './Modals/inserirAlunos';

function App() {
  const baseUrl = 'https://localhost:44390/api/alunos';

  const [data, setData] = useState([]);
  const [modalIncluir, setModalIncluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);

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

  const alunoPost = async () => {
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    await axios.post(baseUrl, alunoSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        toogleModalIncluir();
      }).catch(error => {
        console.log(error);
      })
  }

  const alunoDelete = async () => {
    await axios.delete(baseUrl + "/" + alunoSelecionado.id)
      .then(response => {
        new Notification("Excluido");
      }).catch(error => {
        console.log(error)
      })
  };

  useEffect(() => {
    alunoGet();
  }, []);

  const toogleModalEditar = () => {
    setModalEditar(!modalEditar)
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

  return (
    <div className='aluno-container'>
      <br />
      <h3>Cadastro de Alunos</h3>
      <header>
        <img src={cad} alt='Cadastro'></img>
        <button className='btn btn-success' onClick={() => toogleModalIncluir()}>Incluir Novo Aluno</button>
      </header>
      <table class="table table-bordered" >
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
                <button className="btn btn-primary">Editar</button>{" "}
                <button className="btn btn-danger" onClick={() => alunoDelete()}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>

        <Modal isOpen={modalIncluir}>
          <ModalHeader>Incluir Alunos</ModalHeader>
          <button className="close-button" />
          <ModalBody>
            <div className='form-group'>
              <label>Id:</label>
              <br />
              <label>Nome:</label>
              <input type='text' name='nome' className='form-control' onChange={handleChange} />
              <label>Email:</label>
              <input type='text' name='email' className='form-control' onChange={handleChange} />
              <label>Idade:</label>
              <input type="number" name='idade' className="form-control" onChange={handleChange} />
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
              <br />
              <label>Nome:</label>
              <input type='text' name='nome' className='form-control' onChange={handleChange} />
              <label>Email:</label>
              <input type='text' name='email' className='form-control' onChange={handleChange} />
              <label>Idade:</label>
              <input type="number" name='idade' className="form-control" onChange={handleChange} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary' onClick={() => alunoPost()}>Incluir</button>{"  "}
            <button className='btn btn-danger' onClick={() => toogleModalEditar()}>Cancelar</button>
          </ModalFooter>
        </Modal>

      </table>
    </div>
  );
}

export default App;
