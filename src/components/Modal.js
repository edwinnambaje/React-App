function Modal(props){
    function onCancel(){
        props.onCancel()
    }
    function onConfirm(){
        props.onConfirm()
    }
    return(
    <div className="modal">
        <h1>Are You Sure?</h1>
        <button className="btn btn--alt" onClick={onCancel}>Cancel</button>
        <button className="btn" onClick={onConfirm}>Confirm</button>
    </div>
    );
}
export default Modal