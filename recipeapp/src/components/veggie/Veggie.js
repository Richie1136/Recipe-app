import { Wrapper } from '../../Wrapper'
import { Gradient } from '../../Graident'
import { Card } from '../../Card'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Veggie = ({ recipe }) => {
  return (
    <div className='row'>
      <Wrapper>
        <h3>Trending</h3>
        <Splide options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}>
          {recipe.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Card>
                  <p>{rec.title}</p>
                  <img src={rec.image} alt={rec.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Veggie