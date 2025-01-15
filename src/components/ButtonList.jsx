import Button from "./Button";

const Lists = ["All","Gaming","Music","Podcasts","Reaction videos","xQc","Superhero movies","JavaScript","Live","Calisthenics","Cricket","DSA" ,"Dynamic","Programming"]
const ButtonList=()=>{
    return(
        <div className="ml-20 flex flex-row overflow-x-scroll w-10/12">
           {Lists.map((list)=>
           <Button key={list} name={list}/>
        )}
        </div>
    )
}

export default ButtonList;