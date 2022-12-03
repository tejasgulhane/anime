import React, { useEffect, useRef, useState } from 'react'
import'./Navbar.css'
import { movieactions } from '../store/moviereducer'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const imageref = useRef()
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const[ismovie,setismovie]=useState(false)
  const[iswatchlist,setiswatchlist]=useState(false)

  const movies= useSelector(state => state.movie.moviearr)
  const animewatch= useSelector(state => state.movie.watchlistarr)

  const watchlist= JSON.parse(localStorage.getItem('watchlist'))

 
  console.log(watchlist);

  useEffect(()=>{

  },[animewatch])
  const fetchmovies = () => {
      const query=imageref.current.value;

       const res = movies.filter((mname)=>{
        return query === mname.title.toLowerCase()
      })
      console.log(res);
      dispatch(movieactions.setfiltermoviearr(res))
      setismovie(true)
      navigate('/showsearchedmovie')
  }

  const actionclick =()=>{
    const res = movies.filter((mname)=>{
      return "action" === mname.genres[0].name.toLowerCase()
    })
    console.log(res);
    dispatch(movieactions.setfiltermoviearr(res))
    setismovie(true)
    navigate('/showsearchedmovie')
  }
  const romanceclick =()=>{
    console.log(movies);
    const res = movies.map((mname , i)=>{
      // console.log(mname.genres[i].name);
      // return "romance" === mname.genres[i]?.name?.toLowerCase()
      return mname.genres.filter((item2)=>{
          return item2.name.value === "Romance"
      })
    })
    console.log(res);
    dispatch(movieactions.setfiltermoviearr(res))
    setismovie(true)
    navigate('/showsearchedmovie')
  }
  const thrillerclick =()=>{
    const res = movies.filter((mname)=>{
      return "thriller" === mname.genres[0].name.toLowerCase()
    })
    console.log(res);
    dispatch(movieactions.setfiltermoviearr(res))
    setismovie(true)
    navigate('/showsearchedmovie')
  }
  const scificlick = ()=>{
    const res = movies.filter((mname)=>{
      return "sci-fi" === mname.genres[0].name.toLowerCase()
    })
    console.log(res);
    dispatch(movieactions.setfiltermoviearr(res))
    setismovie(true)
    navigate('/showsearchedmovie')
  }

  const dramaclick = ()=>{
    const res = movies.filter((mname)=>{
      return "action" === mname.genres[0].name.toLowerCase()
    })
    console.log(res);
    dispatch(movieactions.setfiltermoviearr(res))
    setismovie(true)
    navigate('/showsearchedmovie')
  }

  const openwatchlist =()=>{
    setiswatchlist(true)
  }
  const closewatchlist =()=>{
    setiswatchlist(false)
  }
  return (
    <>
        <div className="header">
            <div id='heading'>ANIME WORLD</div>
            <div id='searchbox'>
                <input type="text"  ref={imageref}/>
                <i className='fas fa-search' onClick={fetchmovies}></i>
            </div>
            <div id='menu'>
                <button className='watch-btn' onClick={openwatchlist}>Watch List</button>
            </div>
        </div>
        <div className='section'>
          <h1>Filter by category</h1>  
        </div>
        <div className='section'>
            <button className='btn_filter' onClick={actionclick}>Action</button>
            <button className='btn_filter' onClick={dramaclick}>Drama</button>
            <button className='btn_filter' onClick={scificlick}>Scifi</button>
            <button className='btn_filter' onClick={romanceclick}>Romance</button>
            <button className='btn_filter' onClick={thrillerclick}>Thriller</button>
        </div>
        { iswatchlist && <div className='watchlist_container'>
          <h1 onClick={closewatchlist}>X</h1>
          <div className='watch_container'>
            
      {watchlist && watchlist.map((anime , index)=>{
            return (
              <div key={index} className="watchlist_container_title">
                <h4>{anime.title}</h4>
              </div>
            )
        })}
          </div>
        </div>
        }
    </>
  )
}

export default Navbar