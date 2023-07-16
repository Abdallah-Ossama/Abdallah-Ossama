import "./SkillCard.css";

const SkillCard = ({title, SkillIcon}) => {
  return (
    <div className="card">               
        <img src={SkillIcon} alt={title}/>
        {/* <SkillIcon className="img"/> */}
        <h4>{title}</h4>
    </div>
  )
}

export default SkillCard