import React from 'react'

export default function Gif({title, id,  url}) {
return (
				<a href={`#${id}`} className="gif"> 
					<h4>{title}</h4>
					<img alt={title} src={url}/>
				</a>
		)
}
