import { AbsoluteDiv, PaginaLanding, Video } from "./style";
import video from './video.mp4'
import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import g51 from './g5147.png'


export default function Landing() {
    useEffect(()=> {
        ScrollReveal().reveal('.primeiro', { delay: 1500, duration: 1500, origin: 'left', distance: '150px', mobile: false });
        ScrollReveal().reveal('.segundo', { delay: 2500, duration: 1500, origin: 'left', distance: '150px' , mobile: false});
        ScrollReveal().reveal('.terceiro', { delay: 3500, duration: 1500, origin: 'left', distance: '150px' ,mobile: false});
        ScrollReveal().reveal('.h2', { delay: 4500, duration: 3500 });
    },[])
    return (
        <>
            <PaginaLanding>
                <Video id="myVideo" loop muted autoPlay>
                    <source src={video} type="video/mp4"/>
                </Video>
                <AbsoluteDiv>
                    <AnchorLink className="h1 primeiro" href='#viagens'>VIAGENS,</AnchorLink>
                    <AnchorLink className="h1 segundo" href='#viagens'>CAMINHOS,</AnchorLink>
                    <AnchorLink href='#viagens' className="h1 terceiro" >& HISTÓRIAS</AnchorLink>
                    <h2 className="h2">por onde você quiser</h2>
                    <img className="h2" src={g51} alt="" />
                </AbsoluteDiv>
                
            </PaginaLanding>

        </>
    )
}


