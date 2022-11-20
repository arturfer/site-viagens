import styled from 'styled-components';


export const HeaderBox = styled.header`
    -webkit-touch-callout: none;  /* iPhone OS, Safari */
    -webkit-user-select: none;    /* Chrome, Safari 3 */
    -khtml-user-select: none;     /* Safari 2 */
    -moz-user-select: none;       /* Firefox */
    -ms-user-select: none;        /* IE10+ */
    user-select: none;

background-color: #F7F7F7;
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: 0px 3px 15px 0px rgba(219,219,219,0.75);
    -webkit-box-shadow: 0px 3px 15px 0px rgba(219,219,219,0.75);
    -moz-box-shadow: 0px 3px 15px 0px rgba(219,219,219,0.75);
    height: 15vh;
    display: flex;
    
    .logo-box {
        width: 50%;
        height: 100%;

        display: flex;
        align-items: center;
        padding-left: 10%;

        img{
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            max-height: 80%;

        }
    }

    .nav-box {
        width: 50%;

        display: flex;
        justify-content: end;
        align-items: center;
        gap: 5%;
        padding-right: 10%;
        
        .btn-box {
            

            .anchor {
                -webkit-user-drag: none;
                background-color: transparent;
                border: none;
                font-weight: 700;
                font-size: 18px;
                padding: 5px 10px;
                font-family: 'Times New Roman', Times, serif;
                color: black;
                text-decoration: none;
                &:hover {
                    padding: 5px 10px;
                    color: white;
                    background-color: black;

                }
            }

        }
        
    }

`