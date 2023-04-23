import { useState } from 'react'
import { api } from '../../utils/Api.js'
import { useEffect } from 'react'
import Card from '../Card/index.js'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUsername] = useState("")
    const [userDescription, setUserDescription] = useState("")
    const [userAvatar, setUserAvatar] = useState("")

    useEffect(() => {
        api.getUserData(userName, userDescription, userAvatar)
            .then((data) => {
                setUsername(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
    })

    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getCards(cards)
            .then((data) => {
               setCards (data)

            })      
    }, [cards])

    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <button className="profile__avatar-editbutton" onClick={onEditAvatar}>
                        <img className="profile__avatar" src={`${userAvatar}`} alt="фото исследователя"></img>
                        <div className="profile__edit-avatar"></div>
                    </button>
                    <div className="profile__data">
                        <h1 className="profile__heading">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        <p className="profile__subheading">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}>
                </button>
            </section>
            <section className="elements">
{cards.map((card) =>
     <Card 
     key={card._id}
     card={card}
     onCardClick={onCardClick}
     />
    )
}
</section>
</main>
    )
}
export default Main