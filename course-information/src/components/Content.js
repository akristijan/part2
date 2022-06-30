import {Part} from './Part'

const Content = ({parts}) => {
    
    return (
        <div>
             {parts.map(part =>
                <Part key={part.id} name={part.name} exercise={part.exercises}/>
            )}
            <h3>Total of {parts.reduce((sum, p) => sum +=p.exercises,0)}</h3>
            
        </div>
           
        
    )
}

export {Content}