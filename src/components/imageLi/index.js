function ImageLi({ className, src, alt }) {
    return (
        <li>
            <img className={className} src={src} alt={alt}/>
        </li>
    )
}

export default ImageLi