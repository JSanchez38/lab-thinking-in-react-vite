
 
 function SearchBar() {
   return (
      <form>
        <div className="container">
          <input type="text" class="form-control" placeholder="Search"></input>
        </div>
        
        <div>
          <input className="form-check-input mt-2" type="checkbox"></input>
          <label className="my-1 mx-2">Only show products in stock</label>
        </div>

      </form>
   )
 }
 
 export default SearchBar