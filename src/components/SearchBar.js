import React, {Component} from 'react'
import Axios from 'axios';

class SearchBar extends Component {

    state = {
        keyword: ''
    }

    onSubmitForm = (e) => {
        e.preventDefault()

        Axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: `Client-ID 7ac56375d5fc956921be9e3f6a21d28cab77afc8d8814c389e32eb5022c9c274`
                },
                params: {
                    query: this.state.keyword
                }
            }
        ).then((res) => {
            // jika berhasil
            console.log(res.data.results)
        }).catch((err) => {
            // jika gagal
            console.log(err.message);
        })
    }

    onChangeText = (e) => {
        // Menyimpan text dari user di state.keyword
        this.setState({keyword: e.target.value})
    }

    render() {
        return (
            <div>
                <h3 className="text-center mt-5">Search Image</h3>
                <form className="form-group mt-4"
                      onSubmit={this.onSubmitForm}>
                    <input type="text"
                           onChange={this.onChangeText}
                           className="form-control"
                           placeholder="Type Something" />
                </form>
            </div>
        )
    }
}

export default SearchBar

// onSubmit, ketika tag input di dalam form di 'enter'
    // event.preventDefault() akan menghentikan halaman utk refresh
// onChange, ketika ada perubahan di tag input text
    // event.target.value adalah property yg berisi teks yg kita ketik
    // penulisan event bisa disingkat hanya dengan 'e'
// this.setState() merupakan function utk mengubah data pada state
    // setState() akan menerima satu buah parameter yaitu object {}

// Axios.get().then().catch()
    // then() akan menerima function yg akan dijalankan jika berhasil melakukan request
        // (res)=>{} , res akan berisi respon dari database
    // catch() akan menerima function yg akan dijalankan jika gagal request
        // (err)=>{} , err akan berisi pesan error

// Axios.get(``,{}).then( ()=>{} ).catch( ()=>{} )