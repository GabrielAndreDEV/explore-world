import './css/home_info.css';
import Image1 from './assets/image-3.png';
import Image2 from './assets/image-4.png';
import Image3 from './assets/image-6.png';
import Image4 from './assets/image-5.png';
import { Card } from './Card';

export const HomeInfo = () => {
    const images = [Image1, Image2, Image3, Image4];

    return (
        <section className="home-info">
            <div className='w-100 text-left about'>
                <h2 className='title'>Próximos Passeios E destinos</h2>
                <div className='divisor'/>
                <p>
                    Eligendi, unde neque libero, ab officia laboriosam alias consequuntur laborum eveniet ipsa ex! Rerum architecto dolorum totam quae,
                    magni minima at vero quas voluptas laboriosam autem accusamus nulla eaque officia ipsum distinctio,
                    et inventore facilis vitae consequatur quod omnis voluptates ipsa? Libero inventore dolores necessitatibus omnis voluptate. Sit,
                    officia accusantium consequatur commodi eum deleniti et dolores deserunt accusamus cupiditate animi recusandae assumenda. Similique, eveniet.
                </p>
                <a href='#' className='button btn-indigo font-bold'>Saiba mais</a>
            </div>

            <div className='w-100 cards'>
                {images.map((image, index) =>(
                    <div className='cards-wrapper'>
                        <Card image={image} key={index} />
                    </div>
                ))}
            </div>
        </section>
    )
}
