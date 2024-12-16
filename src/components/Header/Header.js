import styled from 'styled-components';


const HeaderPrincipal = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background:${props => props.theme.colors.primary};
  color: white;
  width: 100%;
  box-sizing: border-box;
`;


const HeaderH1 = styled.h1`
  margin: 15px;
  font-size: 35px;
  
`;


const HeaderNav = styled.nav`
  color: white;
  margin: 0 5px;
  text-decoration: none;


  nav a:hover{
    text-decoration: underline;
  }

`;
 





export {
  HeaderPrincipal,
  HeaderH1,
  HeaderNav,
}
















/*
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color:#e21414;
  color: white;
}

.header h1 {
  margin: 0;
}

.header nav a {
  color: white;
  margin: 0 5px;
  text-decoration: none;
}

.header nav a:hover {
  text-decoration: underline;
}
*/
