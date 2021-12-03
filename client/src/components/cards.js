import { Card } from "react-bootstrap"


export default function card(props){
  const lang = {
    color: props.color
  }
  const card = {
    textAlign: 'center' 
  }
return(

  <Card>
    <a href={props.link}>
    <Card.Img variant="top" src={props.image}/>
    </a>
    {/* <Card.Body>
      <Card.Title><a href={props.link} style={card}>{props.title}</a></Card.Title>
    </Card.Body> */}
    <Card.Footer>
        <small> Language:</small><small style={lang}> {props.language}</small>
    </Card.Footer>
  </Card>
)
}