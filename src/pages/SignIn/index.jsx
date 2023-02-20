import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";


export function SignIn() {
  return (
    <Container>
      <section className="brand">
        <img src="/logo.svg" alt="hexagono azul opaco" />
        <h1>food explorer</h1>
      </section>
      <section className="form">
        <h2>Faça login</h2>

        <form>
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />
          </div>

          <div className="login-input">
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
    </Container>
  )
}
