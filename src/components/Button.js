import Button from 'react-bootstrap/Button';
const Mybutton = ({onClick, text = "Click me gurl"}) =>{
    return (
        <Button variant="primary" onClick={onClick}>
        {text}
        </Button>
    )
}

export default Mybutton;