import React from "react"
import Axios from "axios"
export const AppContext = React.createContext()

class AppContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuth:false,
            userData:[],
            searchResults:"",
        }
    }

    authUser = async (user,pass) => {
        await Axios.get("http://localhost:3000/user?email="+ user)
        .then(res => {
            if(res.data[0].password === pass){
                this.setState({
                    isAuth:true,
                    userData:res.data[0]
                })
            }
            else{
                alert("error")
            }
        })
        .catch(err => console.log(err))
    }



    landingSearch = (value) => {

        Axios.get("http://localhost:3000/product?title="+value).then((res)=>{
               this.setState({
                searchResults:res.data
               })
        }).catch((err)=>{
            console.log(err)
        })
        console.log(this.state)
    }



    render() {
        let {isAuth,userData} = this.state
        let {authUser,landingSearch} = this
        return (
            <AppContext.Provider value={{ isAuth,userData, authUser,landingSearch}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export default AppContextProvider