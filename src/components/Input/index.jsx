import { Container } from "./styles"

export function Input({label, ...rest}) {
  return (
    <Container>
      <input {...rest}/>
    </Container>
  )
}