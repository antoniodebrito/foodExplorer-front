import logo from '/logo.svg';
import { FiSearch } from 'react-icons/fi';
import { MdLogout } from "react-icons/md"
import { Container } from "./styles";
import { Input } from '../Input';



export function Header() {
  return (
    <Container>
      <div className='contentBox'>
        <div className='logo'>
          <img src={logo} alt="Logo"/>
          <h1>food explorer</h1>
        </div>

        <div className='search'>
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <div className="receipt">
          <div>
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53906 14C8.53906 13.4477 8.98678 13 9.53906 13H22.5391C23.0913 13 23.5391 13.4477 23.5391 14C23.5391 14.5523 23.0913 15 22.5391 15H9.53906C8.98678 15 8.53906 14.5523 8.53906 14Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53906 18C8.53906 17.4477 8.98678 17 9.53906 17H22.5391C23.0913 17 23.5391 17.4477 23.5391 18C23.5391 18.5523 23.0913 19 22.5391 19H9.53906C8.98678 19 8.53906 18.5523 8.53906 18Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.62485 6.58579C3.99992 6.21071 4.50863 6 5.03906 6H27.0391C27.5695 6 28.0782 6.21071 28.4533 6.58579C28.8284 6.96086 29.0391 7.46957 29.0391 8V27C29.0391 27.3466 28.8596 27.6684 28.5648 27.8507C28.27 28.0329 27.9018 28.0494 27.5918 27.8944L24.0391 26.118L20.4863 27.8944C20.2047 28.0352 19.8734 28.0352 19.5919 27.8944L16.0391 26.118L12.4863 27.8944C12.2047 28.0352 11.8734 28.0352 11.5918 27.8944L8.03906 26.118L4.48628 27.8944C4.17629 28.0494 3.80815 28.0329 3.51333 27.8507C3.21851 27.6684 3.03906 27.3466 3.03906 27V8C3.03906 7.46957 3.24978 6.96086 3.62485 6.58579ZM27.0391 8L5.03906 8L5.03906 25.382L7.59185 24.1056C7.87338 23.9648 8.20475 23.9648 8.48628 24.1056L12.0391 25.882L15.5918 24.1056C15.8734 23.9648 16.2047 23.9648 16.4863 24.1056L20.0391 25.882L23.5918 24.1056C23.8734 23.9648 24.2047 23.9648 24.4863 24.1056L27.0391 25.382V8Z" fill="white" />
            </svg>
          </div>
          <p>
            Pedidos
            (0)
          </p>
        </div>

        <MdLogout size={32} className="logout"/>
      </div>
    </Container>
  )
}