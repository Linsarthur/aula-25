interface HeaderProps {
    header: string
}

export function Header(props: HeaderProps){
   
    return(
        <>
        <h1>{props.header}</h1>
        </>
    )
}