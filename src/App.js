import React from 'react';
//import logo from './logo.svg';
import './App.css';

let posts = [
  {
    date: "Jan.30,  2018",
    smalltit: "THE SHIFT",
    title: "Kodak's Dubious Blockchain Gamble",
    content: "What's a 130-year-old company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.",
    author: "By KEVIN ROOSE",
    img: "https://www.thebeijinger.com/sites/default/files/styles/large/public/song_for_nobody_jj_lin_12.jpg"
  },
  {
    date: "Jan.30, 2018",
    title: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel",
    content: "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
    author: "By CHRIS HORTON",
    img: "https://static.businessinsider.sg/sites/2/2019/08/jchangi2.png"
    
  },
  {
    date: "Jan.29, 2018",
    title: "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
    content: "Democratic governors are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
    author: "By BRAD PLUMER",
    img: "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/jjlinimage.jpg?itok=BegwA-fX&mtime=1550540320"
  }
]

function App() {
  return (
    <div className = "news">
      <News date = {posts[0].date} smalltit = {posts[0].smalltit} content = {posts[0].content} title = {posts[0].title} author = {posts[0].author} img = {posts[0].img}/>
      <News date = {posts[1].date} content = {posts[1].content} title = {posts[1].title} author = {posts[1].author} img = {posts[1].img}/>
      <News date = {posts[2].date} content = {posts[2].content} title = {posts[2].title} author = {posts[2].author} img = {posts[2].img}/>
    </div>
  );
}



function News(post) {
  return (
    <div id = "whole">
      <div className="section">
        <div className="date">
          <p id = "dd">{post.date}</p>
        </div>
        <div className="maincont">
            <p id = "small">{post.smalltit}</p>
            <p id = "big">{post.title}</p>
            <p id = "content">{post.content}</p>
            <p id = "author">{post.author}</p>
        </div>
        <div className = "img">
        <img id = "imggg" src={post.img} alt="img1" />
        </div>
      </div>
      <hr className = "section"></hr>
    </div>
  );
}

export default App;
