import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#F0F2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    
    --blue-light: #6933FF;

    --text-title:#363F5F;
    --text-body: #969CB3;
    --shape:#FFFFFF;
  
  }
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  //font-size 16px;(Desktop)
  //16*0,93m
html{
  @media(max-width: 1080px){
    font-size:93.75%;//15
  }

  @media(max-width: 720px){
    font-size:87.5%;//14
  }
}

//REM  = 1rem = font-size da minha pagina 

  body{
    background:(--background);
    -webkit-font-smoothing:antialiased;//Deixamos q a fontes fiquem mais detalhadas 
  }

body,input,textArea,button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight:600;
}

button{
  cursor:pointer;
}
[disabled] {
  opacity:0.6;
  cursor:not-allowed;
}

`;