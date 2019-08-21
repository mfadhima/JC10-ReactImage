import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

import Axios from 'axios';

class App extends Component {

    state = {
        images: []
    }

    // function yg akan mengambil keyword dari SearchBar, digunakan untuk request gambar
    onSearchSubmit = (keyword) => {
        Axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: `Client-ID 7ac56375d5fc956921be9e3f6a21d28cab77afc8d8814c389e32eb5022c9c274`
                },
                params: {
                    query: keyword
                }
            }
        ).then((res) => {
            // jika berhasil
            console.log(res.data.results[0].urls.full)
            this.setState({images:res.data.results})
        }).catch((err) => {
            // jika gagal
            console.log(err.message);
        }) 
    }

    render() {
        return (
            <div className="container">
                <SearchBar asd={this.onSearchSubmit} />
                <ImageList data={this.state.images} />
            </div>
        )
    }

}

export default App

/*
    JSX adalah sytax yg disediakan oleh Javascript
    untuk memudahkan developer menyusun html di javascript
*/