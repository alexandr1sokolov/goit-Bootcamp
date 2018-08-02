import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import Sidebar from './Sidebar/Sidebar';
import Search from '../Components/Search/Search.jsx'
import SongsPage from '../Components/SongsPage/SongsPage'
import AlbumPage from '../Components/AlbumPage/AlbumPage'
import ArtistPage from '../Components/ArtistPage/ArtistPage'
import {fetchData} from '../helpers/fetch'
import './App.css';

class App extends Component {
    state={
        songsData:[],
        artistsData:[],
        albumsData:[],
        searchValue:'',
        isLoading: true,
    };

    componentDidMount() {

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=48&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({songsData: data.tracks.track, })
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&limit=48&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({albumsData: data.albums.album,})
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=48&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=25&format=json')
            .then(data => (
                this.setState({ artistsData: data.artists.artist.sort((a,b)=>(+b.listeners)-(+a.listeners)), isLoading: false})
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

    searchData = (e) => {
        e.preventDefault();
        if (this.state.searchValue !==''){
            fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
                .then(({results})=> {
                    console.log(results);
                    this.setState({
                        artistsData: results.artistmatches.artist,
                    })
                });

            fetchData(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
                .then(({results})=> {
                    console.log(results);

                    this.setState({

                        albumsData: results.albummatches.album,
                    })
                });

            fetchData(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
                .then(({results})=> {
                    this.setState({
                        songsData: results.trackmatches.track,
                    })
                });
        }

    };

    inputChange =({target})=>{
        const input= target.name;
        const value= target.value.toLowerCase();
        if (value!==''){
            this.setState({
                [input]:value,
            })
        }
    };

    render() {
        const {songsData, artistsData, albumsData, searchValue, isLoading} =this.state;
       return(
           <div className='wrapper'>
               <div className="container">
                   <Sidebar/>
                   <main className='main'>
                       <Search value={searchValue} onChange={this.inputChange} searchData={this.searchData}/>
                       {isLoading?
                           <div className='loader'>
                               <Loader type="Audio" color="var(--red)" height={100} width={100} />
                           </div>
                           :
                           <div>
                           <Switch>
                               <Route exact path='/' render={()=><ArtistPage artistsData={artistsData}/>}/>
                               <Route path='/songs' render={()=><SongsPage songsData={songsData}/>}/>
                               <Route path='/albums' render={()=><AlbumPage albumsData={albumsData}/>}/>
                           </Switch>
                       </div>}

                   </main>
               </div>
           </div>
       )
    }
}

export default App;
