import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery(props){
    const data = useContext(DataContext)
    console.log('DATA from CONTEXT in gallery file', data)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
        {display}
        </div>
    )
}

export default Gallery
