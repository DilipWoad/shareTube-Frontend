import Button from "./Button";

const Lists = ["All","Gaming","Music","Podcasts","Reaction videos","xQc","Superhero movies","JavaScript","Live","Calisthenics","Cricket","DSA" ,"Dynamic","Programming"]
const ButtonList=()=>{
    return(
        <div className="mt-7 bg-white flex justify-center items-center rounded-lg shadow-xl mx-5 ">
            <div className=" flex flex-row overflow-x-scroll w-11/12  ">
           {Lists.map((list)=>
           <Button key={list} name={list}/>
        )}
        </div>
        </div>
        
    )
}

export default ButtonList;