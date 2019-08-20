import React, {Component} from 'react'

class SearchBar extends Component {

    onSubmitForm = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <h3 className="text-center mt-5">Search Image</h3>
                <form className="form-group mt-4"
                      onSubmit={this.onSubmitForm}>
                    <input type="text"
                           onChange={(e)=>{console.log(e.target.value)}}
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