import React, {Component} from 'react'
import Axios from 'axios';

class SearchBar extends Component {

    state = {
        keyword: ''
    }

    // running ketika tekan enter
    onSubmitForm = (e) => {
        e.preventDefault()

        this.props.asd(this.state.keyword)    
    }

    // running ketika ada perubahan data di text box 
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