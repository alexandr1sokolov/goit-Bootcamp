import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Sidebar from './Sidebar/Sidebar';
import Search from '../Components/Search/Search.jsx';
import SongsPage from '../Components/SongsPage/SongsPage';
import AlbumPage from '../Components/AlbumPage/AlbumPage';
import ArtistPage from '../Components/ArtistPage/ArtistPage';
import {fetchData, getLocal, youtubeFetch} from '../helpers/fetch';


import './App.css';

class App extends Component {
    state={
        songsData:[],
        artistsData:[],
        albumsData:[],
        searchValue:'',
        isLoading: true,
        favouriteArtists:[],
        favouriteSongs:[],
        favouriteAlbums:[],

        interestingArtists:[],
        interestingSongs:[],
        interestingAlbums:[],

        youtubeIsActive: false,

        videoId:'',
        sidebarShow: false,
    };

    componentDidMount() {

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=48&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({songsData: data.tracks.track,
                    favouriteSongs: getLocal('favouriteSongs'),
                    interestingSongs: getLocal('interestingSongs')
                })
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&limit=48&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => (
                this.setState({albumsData: data.albums.album,
                    favouriteAlbums:  getLocal('favouriteAlbums'),
                    interestingAlbums: getLocal('interestingAlbums')})
            ));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=48&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=25&format=json')
            .then(data => (
                this.setState({ artistsData: data.artists.artist.sort((a,b)=>(+b.listeners)-(+a.listeners)), isLoading: false,
                        favouriteArtists: getLocal('favouriteArtists'),
                        interestingArtists: getLocal('interestingArtists'),
                    }
                    )
            ))

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

    handlerYouTube = ({target}) => {
        if (target.className === 'close') {this.setState({ youtubeIsActive: false,})}
        else {
            const query = target.dataset.query;
            youtubeFetch(query).then(data => {this.setState({youtubeIsActive: true,videoId: data,})})
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

    // addFavourite=({target})=>{
    //     const index = target.title;
    //     const currentArtist = this.state.artistsData[index];
    //
    //     if(!this.state.favouriteArtists.includes(currentArtist)){
    //         this.setState(prevState=>({favouriteArtists: [currentArtist,...prevState.favouriteArtists]}));
    //     }
    // };

    addFavourite=({target})=>{
        const index = target.dataset.index;
        const arrForAdd = target.dataset.arrForAdd;
        const check = target.dataset.check;

        const currentItem = this.state[check][index];
            if(!this.state[arrForAdd].some(el=>(el.url === currentItem.url))){
                this.setState(prevState=>({[arrForAdd]: [currentItem,...prevState[arrForAdd]]}), ()=>{
                    localStorage.setItem(`${arrForAdd}`, JSON.stringify(this.state[arrForAdd]))
                });
            } else{
               let result = this.state[arrForAdd].filter(el=>(!el.url===currentItem.url)?el:null);
                this.setState({[arrForAdd]:result});
            }
    };
    sidebarHandler =()=>{
        this.setState(prevState=>({
            sidebarShow: !prevState.sidebarShow,
        }))
    };

    render() {
        const {songsData, artistsData, albumsData,
            searchValue, isLoading, favouriteArtists,
            favouriteSongs, favouriteAlbums,interestingArtists,
            interestingSongs, interestingAlbums, youtubeIsActive, videoId, sidebarShow} = this.state;
       return(
           <div className='wrapper'>
               <div className="container">
                   <Sidebar sidebarShow={sidebarShow}/>
                   <main className='main'>
                       <Search videoId={videoId}  handlerYouTube={this.handlerYouTube} value={searchValue} onChange={this.inputChange} searchData={this.searchData} youtubeIsActive={youtubeIsActive} sidebarHandler={this.sidebarHandler}/>
                       {isLoading?
                           <div className='loader'>
                               <Loader type="Audio" color="var(--red)" height={100} width={100} />
                           </div>
                           :
                           <div>
                           <Switch>
                               <Route exact path='/' render={()=><ArtistPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} artistsData={artistsData}/>}/>
                               <Route path='/songs' render={()=><SongsPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} songsData={songsData}/>}/>
                               <Route path='/albums' render={()=><AlbumPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} albumsData={albumsData}/>}/>

                               <Route path='/favouritesArtists' render={()=><ArtistPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} artistsData={favouriteArtists}/>}/>
                               <Route path='/FavouritesSongs' render={()=><SongsPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} songsData={favouriteSongs}/>}/>
                               <Route path='/FavouritesAlbums' render={()=><AlbumPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} albumsData={favouriteAlbums}/>}/>

                               <Route path='/InterestingArtists' render={()=><ArtistPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} artistsData={interestingArtists}/>}/>
                               <Route path='/InterestingSongs' render={()=><SongsPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} songsData={interestingSongs}/>}/>
                               <Route path='/InterestingAlbums' render={()=><AlbumPage handlerYouTube={this.handlerYouTube} addFavourite={this.addFavourite} albumsData={interestingAlbums}/>}/>
                           </Switch>
                       </div>}
                   </main>
               </div>
           </div>
       )
    }
}

export default App;
