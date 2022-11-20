import styled from 'styled-components';



export const PaginaLanding = styled.div `
    
    font-family: 'Rubik Glitch', cursive;
    width: 100%;
    height: 100vh;
    background-color: black;

`

export const Video = styled.video`

    @keyframes slidein {
  from {
    opacity: 0.9;
  }

  to {
    opacity: 0.1;
  }
}

    
    animation: slidein 5s forwards;
    object-fit: cover;
    animation-delay: 1.5s;
    height: 100vh;
    width: 100%;
    z-index: -1;


`
export const AbsoluteDiv = styled.div`
    
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    
    -webkit-touch-callout: none;  /* iPhone OS, Safari */
    -webkit-user-select: none;    /* Chrome, Safari 3 */
    -khtml-user-select: none;     /* Safari 2 */
    -moz-user-select: none;       /* Firefox */
    -ms-user-select: none;        /* IE10+ */
    user-select: none;

    img{
        position: absolute;
        right: 30px;
        top: 30px;
        width: 15%;
        -webkit-user-drag: none;
    }

    .h1{
        -webkit-user-drag: none;
        font-family: 'Gravitas One', cursive;
        font-weight: 400;
        font-size: 69px;
        margin: 0;
        letter-spacing: -3px;
        color: white;
        cursor: default;
        text-decoration: none;

        &:hover {
            background-color: white;
            color: black;
            padding-left: 5px;
            padding-right: 5px;
        }
    }
    h2 {
        font-family: 'Monsieur La Doulaise', cursive;
        color: white;
        margin-left: 30px;
        font-weight: 500;
        font-size: 90px;
        cursor: default;
        margin: 0 auto;
        


    }

    .primeiro {
        margin-left: 30px;
    }
    .segundo {
        margin-left: 70px;
    }

    .terceiro {
        margin-left: 110px;
    }
`
