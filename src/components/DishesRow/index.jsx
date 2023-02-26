import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Container } from "./styles";

export function DishesRow({ title }) {
  return (
    <Container>
      <h2>{title}</h2>

      <div className="dishesRow-listarea">
        
      </div>
    </Container>
  )
}