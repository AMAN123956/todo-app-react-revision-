import Button from "./Button";
const Header = ({onAdd,showAdd}) => {
    
    return (
        <div className="heading-section">
            <h1>Todo List</h1>
            <Button text={showAdd?'Close':'Add'} color={showAdd?'red':'green'} onClick={onAdd} />
        </div>
    )
}



export default Header