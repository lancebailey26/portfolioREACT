import Card from 'react-bootstrap/Card'

export default function card(props){
return(

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title><a href={props.link}>{props.title}</a></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Language: {props.language}</small>
    </Card.Footer>
  </Card>
)
}