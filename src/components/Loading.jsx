import { Oval } from  'react-loader-spinner'
/* import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; */
function Loading(){
    return(
        <main className="loadOval">
            <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="green"
            secondaryColor="white"
            />
        </main>
    )
}
export default Loading