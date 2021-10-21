const Index = () =>{
	return(
		<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <div className="card bg-primary">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mt-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h5 className="card-title">Total Buku</h5>
                      <p className="card-text">
                        14
                      </p>
                    </div>
                    <div className="col-3">
                      <i className="fas fa-book h1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h5 className="card-title">Total Pengguna</h5>
                      <p className="card-text">
                        14
                      </p>
                    </div>
                    <div className="col-3">
                      <i className="fas fa-users h1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h5 className="card-title">Total Pinjaman</h5>
                      <p className="card-text">
                        14
                      </p>
                    </div>
                    <div className="col-3">
                      <i className="fas fa-file h1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>	
	)
}

export default Index