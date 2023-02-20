import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "../../styles/authentication";


export function SignIn() {
  return (
    <Container>
      <div className="authentication">
        <section className="authentication-brand">
          <img src="/logo.svg" alt="hexagono azul opaco" />
          <h1>food explorer</h1>
        </section>
        <section className="authentication-form">
          <h2>Faça login</h2>
          <form>
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
            <Button title="Entrar"/>
          </form>
          <p>Criar uma conta</p>
        </section>
      </div>
    </Container>
  )
}
