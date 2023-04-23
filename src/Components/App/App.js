import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import ImagePopup from '../ImagePopup';
import PopupWithForm from '../PopupWithForm';
import { useState } from 'react';


function App() {

  const [isEditProfilePopupOpen, setEditProfileOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlaceOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopupOpen, setImagePopupOpen] = useState(false)

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopupOpen(true)
  }


  function handleEditAvatarClick() {
    setEditAvatarOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfileOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlaceOpen(true)
  }


  function closeAllPopups() {
    setEditAvatarOpen(false)
    setEditProfileOpen(false)
    setAddPlaceOpen(false)
    setSelectedCard({})
    setImagePopupOpen(false)
  }


  return (
    <div className="project">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ImagePopup
       isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="edit-profile"
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <fieldset className="popup__set">
          <input type="text" name="name" id="Name" className="popup__info" placeholder="Ваше имя" minLength="2"
            maxLength="40" required></input>
          <span className="popup__info-error Name-error"></span>
          <input type="text" name="job" id="Job" className="popup__info" placeholder="О себе" minLength="2"
            maxLength="200" required></input>
          <span className="popup__info-error Job-error"></span>
          <button className="popup__savebutton" id="editform" type="submit">Сохранить</button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__set">
          <input type="text" name="placename" id="placename" className="popup__info" placeholder="Название"
            minLength="2" maxLength="30" required></input>
          <span className="popup__info-error placename-error"></span>
          <input type="url" name="link" id="link" className="popup__info" placeholder="Ссылка на картинку"
            required></input>
          <span className="popup__info-error link-error"></span>
          <button className="popup__savebutton" id="addcard" type="submit">Создать</button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?">
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input type="url" name="avatar" id="avatar" className="popup__info" placeholder="Ссылка на картинку" required></input>
        <span className="popup__info-error avatar-error"></span>
        <button className="popup__savebutton" id="avatarbut" type="submit">Сохранить</button>
      </PopupWithForm>

    </div>
  );
}

export default App;
