interface FooterProps {
    footer: string
}

export function Footer(props: FooterProps){
    return(
        <>
        <h1>{props.footer}</h1>
        </>
    )
}