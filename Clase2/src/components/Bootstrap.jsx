import 'bootstrap/dist/css/bootstrap.css'

export const Bootstrap = () => {
  return (
    <>
      <div className="alert alert-success" role="alert">
        Test App
      </div>
      <div id="liveAlertPlaceholder">hello</div>
      <button type="button" className="btn btn-primary" id="liveAlertBtn">Show live alert</button>
    </>
  )
}
