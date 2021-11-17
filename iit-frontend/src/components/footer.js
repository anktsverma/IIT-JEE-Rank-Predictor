import Logo from '../assets/logo.svg'
import {ChevronRight,Email,Call,Facebook,Instagram,Twitter,LinkedIn,YouTube,Android} from '@material-ui/icons'
const Footer=()=>{
    return(
        <div className="footer">
         <div className="section1">
            <div>
               <ul style={{listStyleType:'none',color:'white'}}>
                <a> <li><img src={Logo} style={{width:'100px'}}/></li></a>
                <li>Lorem Ipsum is simply dummy  </li>
                <li>text of the printing </li>
                <li>and typesetting industry.</li>
                <li>
                <a>{<Facebook/>}</a>
                <a>{<Instagram/>}</a>
                <a>{<Twitter/>}</a>
                <a>{<LinkedIn/>}</a>
                <a>{<YouTube/>}</a>
                <a>{<Android/>}</a>
                </li>
               </ul>
            </div>

            <div>
            <ul style={{listStyleType:'none',color:'white'}}>
                 <a> <li><h4>Quick Links</h4></li></a>
                 <a><li>{<ChevronRight/>}About us</li></a>
                 <a> <li>{<ChevronRight/>}Courses</li></a>
                 <a><li>{<ChevronRight/>}Partners</li></a>
                 <a><li>{<ChevronRight/>}Pricing</li></a>
           </ul>
            </div>

            <div>
            <ul style={{listStyleType:'none',color:'white'}}>
                 <a> <li><h4>Quick Links</h4></li></a>
                 <a><li>{<ChevronRight/>}CBSE Questions</li></a>
                 <a> <li>{<ChevronRight/>}ICSE Questions</li></a>
                 <a> <li>{<ChevronRight/>}Exams</li></a>
                 <a><li>{<ChevronRight/>}Q&A</li></a>
           </ul>
            </div>

            <div>
              <ul style={{listStyleType:'none',color:'white'}}>
                <a> <li><h4>Contacts</h4></li></a>
                <a><li>{<Email/>}info@speedlabs.in</li></a>
                <a> <li>{<Call/>}022 4120 3067</li></a>
                <a> <li>{<Call/>}1800-419-8902 (Toll Free)</li></a>
                
            </ul>
            </div>
         </div>
         <hr style={{width:'85%',border:'none',borderBottom:'1px solid #3333'}}/>
         <div className="section2">
            <div><p>© Copyright Teevra Edutech Pvt Ltd 2019</p></div>
            <div >
                 <ul style={{listStyleType:'none',color:'white'}} className="policy" >
                      <a> <li>Terms & Conditions</li></a>
                      <a><li>Privacy Policy</li></a>
                      <a> <li>Refund Policy</li></a>
                </ul>
            </div>
         </div>
        </div>
    )
}

export default Footer;