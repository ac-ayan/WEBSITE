import mongodb from "../images/mongo.png";
import imgc from "../images/c++.svg";
import exp from "../images/express.png";
import flutter from "../images/flutter.svg";
const skilldata = [
    {
        icon : <i class="fab fa-html5"></i>,
        title : "HTML 5"
    },
    {
        icon : <i class="fab fa-css3-alt"></i>,
        title : "CSS"
    },
    {
        icon : <i class="fab fa-js-square"></i>,
        title : "Javascript"
    },
    {
        icon : <i class="fab fa-bootstrap"></i>,
        title : "Bootstrap"
    },
    {
        icon : <i class="fab fa-react"></i>,
        title : "ReactJS"
    },
    {
        icon : <i class="fab fa-node"></i>,
        title : "NodeJS"
    },
    {
        icon : <img src={exp} style={{"height":"100px"}}></img>,
        title : "ExpressJS"
    },
    {
        icon : <img src={mongodb} style={{"height":"100px"}}></img>,
        title : "MongoDB"
    },
    {
        icon : <i class="fab fa-cuttlefish"></i>,
        title : "C"
    },
    {
        icon : <img src={imgc} style={{"height":"100px"}}/>,
        title : "C++"
    },
    {
        icon : <i class="fab fa-python"></i>,
        title : "Python"
    },
    {
        icon : <img src={flutter} style={{"height":"100px"}} />,
        title : "Flutter"
    }
];
export default skilldata;