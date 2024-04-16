import './ButtonComponent.css'
function ButtonComponent({text, isActiveNumber, changeCurrentActive, currentActive}) {
    return (<button onClick={() => {
        changeCurrentActive(isActiveNumber)
    }} className={`${currentActive === isActiveNumber ? "button-active" : "button-inactive"}`}>{text}</button>)
}
export {ButtonComponent};