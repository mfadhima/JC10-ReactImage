import React, {Component} from 'react'


class ImageList extends Component {

    renderList = () => {
        
        let hasil = this.props.data.map((item, index) => {
            return (
                <img
                    style={{width: "640px"}}
                    className="m-3"
                    src={item.urls.regular}
                    alt="images"
                    key={index}
                />
            )
        })

        return hasil

    }

    render() {

        return (
            <div>
                <h4 className="text-center">Search result</h4>
               {this.renderList()} 
            </div>
        )

    }

}


export default ImageList