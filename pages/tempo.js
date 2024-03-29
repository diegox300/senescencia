function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export async function getStaticProps(){

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1 
    }

}
export default Tempo;