import Miembro from '../Miembro/Miembro.jsx'

function EquipoLista({ equipo }) {

    return (
        <div className="row">
        {
            equipo.map((miembro, key) => (
                <Miembro key={key} {...miembro} />
            ))
        }
        </div>
    )
}

export default EquipoLista
