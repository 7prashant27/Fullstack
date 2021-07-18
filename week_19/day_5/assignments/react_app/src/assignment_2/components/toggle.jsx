import React from "react"
import axios from "axios";


export default class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        followers_url: props.followers_url,
        following_url:props.following_url,
        followers: [],
        following: [],
        isFetched:true,
        isLoading:false,
        show:false,
        load_text: "Loading"
      };
    }


    toggle = () => {
      this.setState({
          show : !this.state.show,
      })
      this.fetch()

  }


  load = (flag) =>{
      if(flag){

        let count_for_loding_text = 0
        let loading_arr = "."
        this.timerId = setInterval(() => {

            count_for_loding_text++
            if(this.state.load_text.length > 15){
              this.setState({
                load_text : "Loading"
            })
            }
            this.setState({
                load_text : this.state.load_text+loading_arr
            })
            
        }, 30)

      }
      else {
          clearInterval(this.timerId)
      }
  }





    fetch = async () =>{
      
      if(this.state.isFetched && !this.state.show){

        this.setState({
          isLoading:true,
        })

        this.load(true)

        // followers request
        
       await axios.get(this.state.followers_url)
      .then((res) => {
        this.setState({
          followers: res.data
        });
      })
      .catch((error) => console.log(error));

      // following request
     await axios.get(this.state.following_url)
      .then((res) => {
        this.setState({
          following: res.data
        });
      })
      .catch((error) => console.log(error));

      this.setState({
        isFetched:false,
        isLoading:false,

      })

      this.load(false)


      }
      

      
    }





    render()
    {
      return (
        <>
         <button onClick={this.toggle}> {this.state.show ? "Hide" : "Show More"}</button>

         {this.state.isLoading ? <p>{this.state.load_text}</p> : this.state.show ? <> <p>followers:{this.state.followers.length}</p>
        <p>following:{this.state.following.length}</p> </> : null }
         
        
        </>
      )
    }

}
