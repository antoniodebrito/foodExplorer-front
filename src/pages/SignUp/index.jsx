import logo from '/logo.svg'
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "../../styles/authentication";


export function SignUp() {
  return (
    <Container>
      <div className="authentication">
        <section className="authentication-brand">
          <img src={logo} alt="hexagono azul opaco" />
          <h1>food explorer</h1>
        </section>
        <section className="authentication-form">
          <h2>Crie sua conta</h2>
          <form>
            <div className="authentication-input">
              <label htmlFor="email">Seu nome</label>
              <Input
                id="text"
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </div>
            <div className="authentication-input">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </div>
            <div className="authentication-input">
              <label htmlFor="password">Senha</label>
              <Input
                id="password"
                placeholder="No mínimo 6 caracteres"
              />
            </div>
            <Button title="Criar conta"/>
          </form>
          <p>
            <Link to="/">Já tenho uma conta</Link>
          </p>
        </section>
      </div>
    </Container>
  )
}
