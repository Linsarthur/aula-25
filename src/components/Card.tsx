

interface CardProps {
    title: string
    subtitle: string
    content:string
    rodape: string
}

export function Card(props: CardProps){
    return(
        
        <>
        
        <div className="m-3 shadow-lg border rounded-xl w-1/2 h-52">
          <div className="">
            <h1 className="m-3 font-bold text-2xl ">{props.title}</h1>
          </div>
          <div>
            <h2 className="text-zinc-700 m-3">{props.subtitle}</h2>
          </div>
          <div>
            <p className="m-3">{props.content}</p>
          </div>
          <hr />
          <div>
            <footer className="m-3">{props.rodape}</footer>
          </div>
        </div>
        
        </>
    )
}