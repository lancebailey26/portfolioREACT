import { Card } from "react-bootstrap"


export default function card(props){
  const lang = {
    color: props.color
  }
  const card = {
    textAlign: 'center  ' 
  }
return(

  <Card>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title><a href={props.link} style={card}>{props.title}</a></Card.Title>
      <Card.Text>
          {props.desc}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small> Language:</small><small style={lang}> {props.language}</small>
    </Card.Footer>
  </Card>
)
}