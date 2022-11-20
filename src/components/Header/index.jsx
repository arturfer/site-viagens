import { HeaderBox } from "./style";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import g2 from './g2.png'
export default function Header () {
    
    return (
        <>
            <HeaderBox>
                <div className="logo-box">
                    <img src={g2} alt="" />
                </div>
                <div className="nav-box">
                    <div className="btn-box"><AnchorLink className="anchor" href='#landing'>COMEÇO</AnchorLink></div>
                    <div className="btn-box"><AnchorLink className="anchor" href='#viagens'>VIAGENS</AnchorLink></div>
                    <div className="btn-box"><AnchorLink className="anchor" href='#landing'>CAMINHOS</AnchorLink></div>
                    <div className="btn-box"><AnchorLink className="anchor" href='#landing'>HISTÓRIAS</AnchorLink></div>
                </div>
            </HeaderBox>
        </>
    )
}