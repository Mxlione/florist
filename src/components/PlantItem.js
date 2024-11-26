import CareScale from './CareScale'
import '../components/styles/PlantItem.css'


function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function PlantItem({ id, cover, name, water, light, prix = 0 }) {
    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            
            <div className='section-name'>
                {name}
                <div className='price'>{prix} €</div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem