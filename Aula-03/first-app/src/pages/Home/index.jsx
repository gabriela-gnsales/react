import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Home = () => {
    const usuarios =[{
        i: 1,
        u: 'Mark',
        s: 'Otto',
        us: '@mdo'
    }, {
        i: 2,
        u: 'Gabriela',
        s: 'Sales',
        us: '@gs'
    }
    ];

    const montarLista = (id, nome, sobrenome, usuario) => {
        return (

        )
    }

    return <>
        <Link to="/app">Go app</Link>

        {/* <Count/>
        
        </Count></Count> */}

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Usuário</th>
            </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => (                    
                    <tr key={usuario.id}>

                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.sobrenome}</td>
                        <td>{usuario.usuario}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    </>
}

export { Home }