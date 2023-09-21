import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link } from "@mui/material"

function Produto(props) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "2px 2px 9px purple"}} key={props.key}>
        <CardMedia 
            sx={{ height: 200 }}
            image={props.imagem}
            title={props.titulo}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.descricao}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {props.categoria}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.ano}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.duracao}
            </Typography>

        </CardContent>
        <CardActions>
            <Button size="large">
                <Link style={{textDecoration: "none"}} href={ "editar/produto/" + props.id }>Editar</Link>
            </Button>
            <Button size="large">
                <Link style={{textDecoration: "none"}} href="#" onClick={props.excluir}>Excluir</Link>
            </Button>
        </CardActions>
    </Card>
  )
}

export default Produto