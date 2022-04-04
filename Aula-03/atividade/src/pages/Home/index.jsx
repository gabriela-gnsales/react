import { Link } from 'react-router-dom'

const Home = () => {
    return <>
        <Button variant="primary" type="submit">
            <Link to="/app">Cadastro</Link>
        </Button>
    </>
}

export { Home }