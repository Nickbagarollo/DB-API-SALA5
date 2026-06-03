import s from './card.module.css'

export const Card = (props) => {
    return(
        <div key={props.unico}>
            <img src={props.imagem} alt={props.nome} />
            <h4>Name: {props.nome}</h4>
            <p>Species: {props.especie}</p>
            <p>Origin: {props.origem}</p>
        </div>
    )
}