import React, {Component} from 'react'

class ImageList extends Component {
    renderList = () => {
        let hasil = this.props.data.map((item) => {
            return <img src={item.urls.regular}/>
        })

        return hasil
    }

    render() {
        return (
            <div>
                <h1>Search result</h1>
               {this.renderList()} 
            </div>
        )
    }
}

export default ImageList