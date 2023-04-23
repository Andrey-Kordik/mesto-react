

function PopupWithForm({name, title, children, isOpen, onClose}) {

    return (
        <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""} `}>
          console.log(isOpen)
        <div className="popup__content popup__commonclass">
          <h3 className ='popup__heading'>{`${title}`}</h3>
          <form className="popup__container" name={`${name}`} noValidate>
            {children}
          </form>
          <button className="popup__closing-icon" type="button" onClick={onClose}></button>
        </div>
      </div>
)
}

export default PopupWithForm