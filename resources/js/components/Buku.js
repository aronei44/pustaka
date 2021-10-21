import {Component} from 'react'

class Buku extends Component{
	state = {
    dataBuku: []
  }
	componentDidMount(){
		fetch('/api/book')
		  .then(res => res.json())
		  .then((data) => {
		    this.setState({ dataBuku: data })
		  })

	}
	render(){
		const { dataBuku } = this.state;
		return(
			<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
	      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
	        <h1 className="h2">Data Buku</h1>
	      </div>
	      <table className="table">
	        <thead>
	          <tr>
	            <th scope="col">#</th>
	            <th scope="col">Judul</th>
	            <th scope="col">Jumlah</th>
	          </tr>
	        </thead>
	        <tbody>
	        	{dataBuku.map(item=>(
		          <tr key={item.id}>
		            <th scope="row" >1</th>
		            <td>{item.judul}</td>
		            <td>{item.jumlah}</td>
		          </tr>
	        	))}
	        </tbody>
	      </table>
	    </main>	
		)
	}
}

export default Buku