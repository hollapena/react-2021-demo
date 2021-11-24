import './link.css';

export default function Link (props) {

    const {title, url}=props.lnk
    return  <a className="navLink" href={url}> {title}</a>;
    
};