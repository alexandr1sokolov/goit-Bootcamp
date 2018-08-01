import React, {Component} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Search from '../Components/Search/Search.jsx'
import SongsPage from '../Components/SongsPage/SongsPage'
import AlbumPage from '../Components/AlbumPage/AlbumPage'
import ArtistPage from '../Components/ArtistPage/ArtistPage'
import fetchData from '../helpers/fetch'
import './App.css';

class App extends Component {
    state={
        songsData:[],
        artistsData:[],
        albumsData:[],
        searchValue:'',
    };

    componentDidMount() {

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({songsData: data.tracks.track,})
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({albumsData: data.albums.album,})
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=25&format=json')
            .then(data => (
                this.setState({ artistsData: data.artists.artist.sort((a,b)=>(+b.listeners)-(+a.listeners)),})
            ));

        // axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        //     .then(({status,data})=>{
        //         if (status===200){
        //             this.setState({
        //                 songsData: data.tracks.track,
        //             })
        //         }
        //     });
        // axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        //     .then(({status,data})=>{
        //         if (status===200){
        //             this.setState({
        //                 artistsData: data.artists.artist.sort((a,b)=>(+b.listeners)-(+a.listeners)),
        //             })
        //         }
        //         console.log(this.state.artistsData);
        //     });
        // axios.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
        //     .then(({status,data})=>{
        //         if (status===200){
        //             this.setState({
        //                 albumsData: data.albums.album,
        //             })
        //         }
        //     })
    };

    inputChange =({target})=>{
        const input= target.name;
        const value= target.value;
        this.setState({
            [input]:value,
        })
    };

    render() {
        const {songsData, artistsData, albumsData, searchValue} =this.state;
       return(
           <div className='wrapper'>
               <div className="container">
                   <Sidebar/>
                   <main className='main'>
                       <Search value={searchValue} onChange={this.inputChange}/>
                       <div>
                           <ArtistPage artistsData={artistsData}/>
                       </div>
                       <div>
                           <SongsPage songsData={songsData}/>
                       </div>
                       <div>
                           <AlbumPage albumsData={albumsData}/>
                       </div>
                   </main>
               </div>
           </div>
       )
    }
}

export default App;
